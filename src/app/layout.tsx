import type { Metadata } from 'next'

import './globals.css'
import Link from 'next/link'

import Footer from './components/footer'

export const metadata: Metadata = {
  title: 'Restaurancy',
  description: 'The best restaurants in the world',
  keywords: ['restaurant', 'food', 'eat', 'dinner', 'lunch']
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] px-4">
        <header className="text-xl font-bold leading-[3rem]">
          <Link href="/">Restaurancy</Link>
        </header>
        <main className="py-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
