import { signIn } from 'next-auth/react'

export default function SignOutButton() {
  return (
    <button
      className="w-full max-w-[150px] rounded-md bg-neutral-200 px-5 py-1 text-base font-medium text-neutral-800 hover:bg-neutral-400 hover:text-neutral-900"
      type="button"
      onClick={() => signIn()}
    >
      Sign In
    </button>
  )
}
