import api from '@/api'
import Card from '@/components/ui/RestaurantCard/card'

export default async function Home({
  searchParams
}: {
  searchParams: { name: string }
}) {
  const { name } = searchParams
  const restaurants = await api.list(name)

  if (!restaurants.length) {
    return (
      <div className="text-md flex h-[80vh] items-center justify-center text-center opacity-70">
        {`${name[0].toUpperCase()}${name.slice(
          1
        )} is not an affiliated restaurant yet.`}
      </div>
    )
  }

  return (
    <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
      {restaurants.map((restaurant) => {
        return <Card key={restaurant.id} restaurant={restaurant} />
      })}
    </section>
  )
}
