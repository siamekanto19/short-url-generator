'use client'
import React, { Dispatch, FC, SetStateAction } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog'
import { ShortUrl } from '@prisma/client'
import { CopyToClipboard } from '../ui/copy-to-clipboard'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

type Props = {
  url: ShortUrl
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const LinkPreview: FC<Props> = ({ url, isOpen, setIsOpen }) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='text-center'>Your Short URL is ready</DialogTitle>
          <DialogDescription className='text-center'>You can copy the short URL from below and share it</DialogDescription>
        </DialogHeader>
        <div className='py-5 flex flex-col gap-4'>
          <CopyToClipboard text={window.location + url.modifiedUrlPath} />
          {url.validUntil ? <p className='text-center text-sm font-medium'>URL will be expired {dayjs(url.validUntil).fromNow()}</p> : null}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default LinkPreview
