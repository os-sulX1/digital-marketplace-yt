'use client'
import React from 'react'
import { useFormStatus } from 'react-dom'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'

const SubmitButton = ({title} : {title:string}) => {
  const {pending} = useFormStatus()
  return (
    <>
    {pending ? (<Button disabled> <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please Wait</Button>): (
      <Button>{title}</Button>
    )}
    </>
  )
}

export default SubmitButton