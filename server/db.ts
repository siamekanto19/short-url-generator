import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>
} & typeof global

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = db

export const db = globalThis.prismaGlobal ?? prismaClientSingleton()
