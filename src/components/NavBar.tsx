'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

export default function NavBar() {
  const { data: session } = useSession()

  return (
    <header>
      <nav className="flex items-center justify-between rounded-md bg-white/5 px-4 py-3 shadow">
        <Link className="text-2xl font-medium" href="/">
          Restaurancy
        </Link>
        <div className="flex items-center justify-center gap-20">
          <Link
            className="rounded-md px-5 py-1 text-lg font-medium text-neutral-300 hover:bg-black/40 hover:text-neutral-200"
            href="/dashboard"
          >
            Dashboard
          </Link>
          {session ? (
            <button
              className="rounded-md bg-neutral-800 px-5 py-1 text-base font-medium text-neutral-300 hover:bg-black/40 hover:text-neutral-200"
              type="button"
              onClick={() => signOut()}
            >
              Sign Out
            </button>
          ) : (
            <button
              className="rounded-md bg-neutral-200 px-5 py-1 text-base font-medium text-neutral-800 hover:bg-neutral-400 hover:text-neutral-900"
              type="button"
              onClick={() => signIn()}
            >
              Sign In
            </button>
          )}
        </div>
      </nav>
    </header>
  )
}
