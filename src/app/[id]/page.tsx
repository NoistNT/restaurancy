import Link from 'next/link'

import api from '@/api'

import Card from '../components/card'

export async function generateMetadata({
  params: { id }
}: {
  params: { id: string }
}) {
  const restaurant = await api.fetch(id)

  return {
    title: `${restaurant.name} - Restaurancy`,
    description: restaurant.description,
    metadataBase: new URL('https://localhost:3000')
  }
}

export async function generateStaticParams() {
  const restaurants = await api.list()

  return restaurants.map((restaurant) => ({
    id: restaurant.id
  }))
}

// Por defecto se muestra un error de server 500 -> true
// Si queremos mostrar un 404 si el restaurante no existe
// Para cualquier ruta no definida en generateStaticParams -> false
// true -> 500
// false -> 404
// export const dynamicParams = false

export default async function RestaurantPage({
  params: { id }
}: {
  params: { id: string }
}) {
  const restaurant = await api.fetch(id)

  return (
    <section>
      <Link href="/" prefetch={false}>
        Go back
      </Link>
      <Card restaurant={restaurant} />
    </section>
  )
}
