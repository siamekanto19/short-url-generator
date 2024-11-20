import { generateShortUrlSchema } from '@/schemas'
import { describe, expect, test } from 'vitest'

describe('Only Valid URLs are accepted', () => {
  test('rejects invalid URL', () => {
    const testSubject = { originalUrl: 'google' } // Invalid URL
    const validated = generateShortUrlSchema.safeParse(testSubject)
    expect(validated.success).toBe(false)
  })

  test('accepts valid URL', () => {
    const testSubject = { originalUrl: 'https://google.com' } // Valid URL
    const validated = generateShortUrlSchema.safeParse(testSubject)
    expect(validated.success).toBe(true)
  })
})
