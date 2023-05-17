import 'server-only'

import { z } from 'zod'

const commentsSchema = z
  .object({
    id: z.string().nonempty(),
    user: z.string().nonempty(),
    comment: z.string().nonempty(),
  })
  .array()

export async function getComments() {
  const res = await fetch('http://localhost:3000/api/comments', {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = commentsSchema.parse(await res.json())

  return data
}
