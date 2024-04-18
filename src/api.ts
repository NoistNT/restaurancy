import type { Restaurant, RestaurantSingle } from './types'

import supabase from '@/app/api/supabase'

const api = {
  list: async (name: string): Promise<Restaurant[]> => {
    if (name) return await api.search(name)

    const { data, error } = await supabase.from('restaurants').select('*')

    if (error instanceof Error) {
      throw new Error(`Failed to fetch restaurants: ${error.message}`)
    }

    const restaurants = data as Restaurant[]

    return restaurants
  },

  fetch: async (id: Restaurant['id']): Promise<Restaurant> => {
    const { data: restaurant, error } = (await supabase
      .from('restaurants')
      .select('*')
      .eq('id', id)
      .single()) as RestaurantSingle

    if (error instanceof Error || !restaurant) {
      throw new Error(`Restaurant with id ${id} not found: ${error?.message}`)
    }

    return restaurant
  },

  search: async (name: string): Promise<Restaurant[]> => {
    const { data, error } = await supabase
      .from('restaurants')
      .select('*')
      .ilike('name', `%${name}%`)

    if (error instanceof Error) {
      throw new Error(
        `${name} is not an affiliated restaurant yet. ${error.message}`
      )
    }

    return data as Restaurant[]
  }
}

export default api
