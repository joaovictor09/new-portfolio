import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: { user: string }
  },
) {
  return NextResponse.json({ data: { params } })
}
