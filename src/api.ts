import type { Restaurant } from './types'

const api = {
  list: async (): Promise<Restaurant[]> => {
    // Obtenemos la información de Google Sheets en formato texto y la dividimos por líneas, nos saltamos la primera línea porque es el encabezado
    const [, ...data] = await fetch(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vTKhYG-7Q0POWsUs4NNs0ncKyK7y-TzBeI4DCuAhMkTsPfo600E0pXmCt4jdTKyA96nRJMs32FnPnvQ/pub?output=csv'
    )
      .then((res) => res.text())
      .then((text) => text.split('\n'))

    // Convertimos cada línea en un objeto Restaurant, asegúrate de que los campos no posean `,`
    const restaurants: Restaurant[] = data.map((row) => {
      const [id, name, description, address, score, ratings, image] = row.split(',')

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
