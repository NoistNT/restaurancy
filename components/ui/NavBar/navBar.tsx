'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'

import SignInButton from './signInButton'
import SignOutButton from './signOutButton'
import SearchBox from './searchBox'

export default function NavBar() {
  const { data: session } = useSession()

  return (
    <header>
      <nav className="flex items-center justify-between rounded-md bg-white/5 px-4 py-3 shadow">
        <div className="flex w-full items-center space-x-4 md:space-x-10">
          <Link className="text-2xl font-medium" href="/">
            Restaurancy
          </Link>
          <Link
            className="rounded-md px-5 py-1 text-lg font-medium text-neutral-300 hover:bg-black/40 hover:text-neutral-200"
            href="/dashboard"
          >
            Dashboard
          </Link>
        </div>
        <div className="flex w-full items-center justify-end space-x-6">
          <SearchBox placeholder="Search" />
          {!session ? <SignInButton /> : <SignOutButton />}
        </div>
      </nav>
    </header>
  )
}
