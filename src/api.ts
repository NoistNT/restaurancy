import type { Restaurant } from './types'

import { URL } from './constants'

const api = {
  list: async (): Promise<Restaurant[]> => {
    // Fetch data text-formatted from Google Sheets and split in lines
    // Skip the first line to skip the header

    // { cache: 'no-store' } won't cache the data, it will revalidate data in every request
    // { next: { tags: ['restaurants'] }will revalidate every component that uses this tag
    // { next: { revalidate: 10 } } will revalidate 10 seconds after the first request
    const [, ...data] = await fetch(URL)
      .then((res) => res.text())
      .then((text) => text.split('\n'))

    // Convertimos cada línea en un objeto Restaurant, asegúrate de que los campos no posean `,`
    const restaurants: Restaurant[] = data.map((row) => {
      const [id, name, description, address, score, ratings, image] =
        row.split(',')

      return {
        id,
        name,
        description,
        address,
        score: Number(score),
        ratings: Number(ratings),
        image
      }
    })

    return restaurants
  },
  fetch: async (id: Restaurant['id']): Promise<Restaurant> => {
    const restaurants = await api.list()
    const restaurant = restaurants.find((restaurant) => restaurant.id === id)

    if (!restaurant) {
      throw new Error(`Restaurant with id ${id} not found`)
    }

    return restaurant
  }
}

export default api
