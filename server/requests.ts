import { db } from './db'
import dayjs from 'dayjs'

export const fetchOriginalUrl = async (urlPath: string) => {
  const url = await db.shortUrl.findUnique({
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
