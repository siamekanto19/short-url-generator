import { Button } from '@/components/ui/button'
import { fetchOriginalUrl } from '@/server/requests'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

const ShortUrlPage: NextPage<PageProps> = async ({ params }) => {
  const originalUrl = await fetchOriginalUrl(params.shortUrl)

  if (originalUrl) {
    return redirect(originalUrl)
  }

  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center'>
      <div className='w-10/12 md:w-1/2 lg:w-1/3 2xl:w-1/4 mx-auto flex flex-col items-center gap-8'>
        <h2 className='text-2xl font-bold text-center'>Nothing Found</h2>
        <div className='w-full mx-auto'>
          <Image className='mx-auto' src='/404.svg' width={300} height={300} alt='404' />
        </div>
        <p className='text-muted-foreground text-center'>We could not find any valid URL for this Short URL</p>
        <Link href='/'>
          <Button size='lg' className='w-full'>
            Create a short URL
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default ShortUrlPage
