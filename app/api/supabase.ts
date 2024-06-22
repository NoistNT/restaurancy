import { createClient } from '@supabase/supabase-js'

import { supabaseAnonKey, supabaseUrl } from '@/config'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase
