'use server'
import { generateUniqueString } from '@/lib/utils'
import { generateShortUrlSchema } from '@/schemas'
import { z } from 'zod'
import prisma from './db'

export const generateShortUrl = async (input: z.infer<typeof generateShortUrlSchema>) => {
  const { data, error } = generateShortUrlSchema.safeParse(input)

  if (error?.message) {
    throw new Error(error.message)
  }

  if (data) {
    const url = await prisma.shortUrl.create({
      data: {
        originalUrl: data.originalUrl,
        validUntil: data.validUntil,
        modifiedUrlPath: generateUniqueString(),
      },
    })

    return { url }
  }

  return null
}
