'use client'
import React, { Fragment, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { generateShortUrlSchema } from '@/schemas'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useMutation } from '@tanstack/react-query'
import { generateShortUrl } from '@/server/actions'
import { DatePicker } from '../ui/date-picker'
import { ShortUrl } from '@prisma/client'
import { toast } from 'sonner'
import LinkPreview from './LinkPreview'

const LinkGenerateForm = () => {
  const [shortUrl, setShortUrl] = useState<ShortUrl | null>(null)
  const [showPreview, setShowPreview] = useState(false)

  const form = useForm<z.infer<typeof generateShortUrlSchema>>({
    defaultValues: {
      originalUrl: '',
    },
    resolver: zodResolver(generateShortUrlSchema),
  })

  const { mutateAsync: submitOriginalUrl, isPending } = useMutation({
    mutationKey: ['generateUrl'],
    mutationFn: generateShortUrl,
    onSuccess(data) {
      if (data?.url) {
        form.reset()
        setShortUrl(data.url)
        setShowPreview(true)
      }
    },
    onError(error) {
      toast.error(error.message)
    },
  })

  return (
    <Fragment>
      <Form {...form}>
        <form onSubmit={form.handleSubmit((data) => submitOriginalUrl(data))} className='w-full flex flex-col gap-4'>
          <FormField
            control={form.control}
            name='originalUrl'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Original URL</FormLabel>
                <FormControl>
                  <Input required placeholder='https://google.com' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='validUntil'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Valid Until</FormLabel>
                <FormControl>
                  <DatePicker {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button loading={isPending} size='lg' className='mt-6 w-full'>
            Generate URL
          </Button>
        </form>
      </Form>
      {shortUrl ? <LinkPreview isOpen={showPreview} setIsOpen={setShowPreview} url={shortUrl} /> : null}
    </Fragment>
  )
}

export default LinkGenerateForm
