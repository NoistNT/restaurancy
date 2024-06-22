import type { NextRequest } from 'next/server'

import { revalidatePath } from 'next/cache'

export async function GET(req: NextRequest) {
  const path = req.nextUrl.searchParams.get('path') ?? '/'

  revalidatePath(path)

  return Response.json({ success: true })
}
