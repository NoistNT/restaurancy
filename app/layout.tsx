import type { Metadata } from 'next'

import Footer from '@/components/footer'
import NavBar from '@/components/ui/NavBar/navBar'

import Providers from './Providers'
import './globals.css'

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
      <body>
        <Providers>
          <NavBar />
          <main className="m-auto grid min-h-[85vh] max-w-[1500px] grid-rows-[auto,1fr,auto] px-4 py-8">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
