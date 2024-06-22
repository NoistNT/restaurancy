'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
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
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}
