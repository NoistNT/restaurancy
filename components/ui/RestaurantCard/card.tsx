import type { Restaurant } from '@/types'

import Link from 'next/link'
import dynamic from 'next/dynamic'

import FavouriteButton from './favouriteButton'

export default async function Card({ restaurant }: { restaurant: Restaurant }) {
  const DynamicFavouriteButton = dynamic(async () => FavouriteButton, {
    ssr: false
  })

  return (
    <article>
      <img
        alt={restaurant.name}
        className="mb-3 h-[300px] w-full object-cover"
        src={restaurant.image}
      />
      <div className="inline-flex w-full items-center gap-2">
        <h2 className="inline-flex gap-2 text-lg font-bold">
          <Link key={restaurant.id} href={`/${restaurant.id}`}>
            <span>{restaurant.name}</span>
          </Link>
          <small className="inline-flex gap-1">
            <span>⭐</span>
            <span>{restaurant.score}</span>
            <span className="font-normal opacity-75">
              ({restaurant.ratings})
            </span>
          </small>
        </h2>

        <div className="inline-flex">
          <DynamicFavouriteButton id={restaurant.id} />
        </div>
      </div>
      <p className="opacity-90">{restaurant.description}</p>
    </article>
  )
}
