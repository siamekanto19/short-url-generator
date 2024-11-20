import { z } from 'zod'

export const generateShortUrlSchema = z.object({
  originalUrl: z.string().url({ message: 'Must be a valid URL' }),
  validUntil: z.date().optional(),
})
