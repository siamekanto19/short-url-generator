import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { randomBytes } from 'crypto'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateUniqueString(): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const length = 6
  let result = ''

  const buffer = randomBytes(length)
  for (let i = 0; i < length; i++) {
    const randomValue = buffer[i] % characters.length
    result += characters[randomValue]
  }

  return result
}
