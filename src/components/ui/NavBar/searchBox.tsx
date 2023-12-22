'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { useDebouncedCallback } from 'use-debounce'

export default function SearchBox({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleSearch = useDebouncedCallback((term: string) => {
    const params: URLSearchParams = new URLSearchParams(searchParams)

    if (term) {
      params.set('name', term)
      params.set('page', '1')
    } else {
      params.delete('name')
      params.set('page', '1')
    }

    replace(`${pathname}?${params.toString()}`)
  }, 300)

  return (
    <div className="relative flex w-full max-w-[300px] items-center gap-2 rounded-md border-2 border-white/20 bg-neutral-900 bg-opacity-70 px-2 py-1 shadow-lg  hover:border-white/30 sm:max-w-xs lg:max-w-lg">
      <input
        className="w-full rounded-md bg-transparent text-center text-[0.95rem] text-neutral-300 placeholder-neutral-500 outline-none placeholder-shown:text-neutral-400 focus:placeholder-shown:text-neutral-700"
        defaultValue={searchParams.get('name')?.toString()}
        placeholder={placeholder}
        type="text"
        onChange={(event) => handleSearch(event.target.value)}
      />
      <FaMagnifyingGlass
        className="absolute right-4 top-1/2 -translate-y-1/2 transform text-neutral-700"
        size={20}
      />
    </div>
  )
}
