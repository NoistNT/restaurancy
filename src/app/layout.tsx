import type { Metadata } from 'next'

import './globals.css'
import NavBar from '@/components/NavBar'

import Footer from '../components/footer'

import Providers from './Providers'

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
        <Providers>
          <NavBar />
          <main className="py-8">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
