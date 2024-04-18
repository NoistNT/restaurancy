export interface Restaurant {
  id: string
  name: string
  image: string
  description: string
  address: string
  score: number
  ratings: number
}

export interface RestaurantSingle {
  data: Restaurant
  error: Error | null
}
