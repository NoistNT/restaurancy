'use client'

import { useState } from 'react'

export default function FavouriteButton({ id }: { id: string }) {
  const [isFavourite, setIsFavourite] = useState(
    () => window.localStorage.getItem('favourites')?.includes(id)
  )

  const toggleFavourite = () => {
    const favourites = JSON.parse(
      window.localStorage.getItem('favourites') || '[]'
    )

    if (isFavourite) {
      favourites.splice(favourites.indexOf(id), 1)
    } else {
      favourites.push(id)
    }
    window.localStorage.setItem('favourites', JSON.stringify(favourites))

    // Update the state to trigger re-render
    setIsFavourite(!isFavourite)
  }

  return (
    <button
      className={`text-xl text-red-500 ${
        isFavourite ? 'opacity-100' : 'opacity-20 hover:opacity-100'
      }`}
      type="button"
      onClick={toggleFavourite}
    >
      ♥
    </button>
  )
}
