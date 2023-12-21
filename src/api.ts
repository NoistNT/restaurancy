import type { Restaurant } from './types'

import supabase from './app/api/supabase'

const api = {
  list: async (): Promise<Restaurant[]> => {
    const { data, error } = await supabase.from('restaurants').select('*')

    if (error instanceof Error) {
      throw new Error(`Failed to fetch restaurants: ${error.message}`)
    }

    const restaurants = data as Restaurant[]

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
