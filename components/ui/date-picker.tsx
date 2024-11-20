'use client'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import { ControllerRenderProps } from 'react-hook-form'

export function DatePicker({ value, onChange }: ControllerRenderProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={'outline'} className={cn('w-full flex justify-start text-left font-normal', !value && 'text-muted-foreground')}>
          <CalendarIcon className='mr-2 h-4 w-4' />
          {value ? format(value, 'PPP') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0'>
        <Calendar disabled={(date) => date < new Date() || date < new Date('1900-01-01')} mode='single' selected={value} onSelect={onChange} initialFocus />
      </PopoverContent>
    </Popover>
  )
}
