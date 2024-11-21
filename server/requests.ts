import dayjs from 'dayjs'
import prisma from './db'

export const fetchOriginalUrl = async (urlPath: string) => {
  const url = await prisma.shortUrl.findUnique({
    where: {
      modifiedUrlPath: urlPath,
    },
  })

  const today = dayjs()

  if (url && url.validUntil && dayjs(url.validUntil).isAfter(today)) {
    return null
  }

  if (url) {
    return url.originalUrl
  }

  return null
}
