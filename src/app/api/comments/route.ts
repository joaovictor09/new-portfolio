import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const commentsSchema = z.object({
  user: z.string().nonempty(),
  comment: z.string().nonempty(),
})

export async function GET() {
  const users = await prisma.comments.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })

  return NextResponse.json(users)
}

export async function POST(request: Request) {
  const { comment, user } = commentsSchema.parse(await request.json())

  const commentData = await prisma.comments.create({
    data: {
      user,
      comment,
    },
  })

  return NextResponse.json(commentData)
}
