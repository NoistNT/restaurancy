import type { NextAuthOptions } from 'next-auth'

import GoogleProvider from 'next-auth/providers/google'

export const options: NextAuthOptions = {
  theme: {
    logo: 'https://next-auth.js.org/img/logo/logo-sm.png'
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ]
}
