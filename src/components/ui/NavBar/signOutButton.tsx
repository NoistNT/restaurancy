import { signOut } from 'next-auth/react'

export default function SignInButton() {
  return (
    <button
      className="w-full max-w-[150px] rounded-md bg-neutral-800 px-5 py-1 text-base font-medium text-neutral-300 hover:bg-black/40 hover:text-neutral-200"
      type="button"
      onClick={() => signOut()}
    >
      Sign Out
    </button>
  )
}
