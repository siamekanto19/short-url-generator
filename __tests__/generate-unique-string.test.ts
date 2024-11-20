import { generateUniqueString } from '@/lib/utils'
import { test, describe, expect } from 'vitest'

describe('Generated Short URLs are unique', () => {
  test('should generate 1000 unique strings', () => {
    const generatedStrings: string[] = [] // Array of all generated strings
    const numberOfStringsToGenerate = 1000
    for (let i = 0; i < numberOfStringsToGenerate; i++) {
      const uniqueString = generateUniqueString() // Generate new string
      expect(generatedStrings.includes(uniqueString)).toBe(false) // Ensure string is not a duplicate
      generatedStrings.push(uniqueString) // Add the string to the array
    }

    expect(generatedStrings.length).toBe(numberOfStringsToGenerate) // Ensure it generated exactly 1000 strings
  })
})
