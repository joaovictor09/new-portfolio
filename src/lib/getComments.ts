import { z } from 'zod'
import { checkEnvironment } from './checkEnvironment'

const commentsSchema = z
  .object({
    id: z.string().nonempty(),
    user: z.string().nonempty(),
    comment: z.string().nonempty(),
  })
  .array()

export type commentsPropsType = z.infer<typeof commentsSchema>

export async function getComments() {
  const res = await fetch(checkEnvironment().concat('/api/comments'), {
    cache: 'no-store',
  })

  console.log(checkEnvironment().concat('/api/comments'))

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = commentsSchema.parse(await res.json())

  return data
}
