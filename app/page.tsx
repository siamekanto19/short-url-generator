import LinkGenerateForm from '@/components/core/LinkGenerateForm'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

export default function Homepage() {
  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center'>
      <Card className='w-11/12 md:max-w-lg border-0 shadow-none'>
        <CardHeader className='text-center'>
          <CardTitle>Generate Short Links</CardTitle>
          <CardDescription className='pt-1'>Enter long URL to generate a short url for it</CardDescription>
        </CardHeader>
        <CardContent>
          <LinkGenerateForm />
        </CardContent>
      </Card>
    </div>
  )
}
