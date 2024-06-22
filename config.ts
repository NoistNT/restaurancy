if (
  !process.env.NEXT_PUBLIC_SUPABASE_URL ||
  !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
) {
  throw new Error('Supabase URL or Anon Key is not defined')
}

export const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL

export const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
