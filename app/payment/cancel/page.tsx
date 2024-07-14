import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { XCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CancelRout = () => {
  return (
    <section className='w-full min-h-[80hv] flex items-center justify-center'>
      <Card className='w-[350px] mt-36'>
        <div className="p-6">
          <div className="w-full flex justify-center">
            <XCircle className='w-12 h-12 rounded-full bg-red-500/30 text-red-500 p-2' />
          </div>
          <div className="mt-3 text-clip sm:mt-5 w-full ">
            <h3 className='text-lg leading-6  font-medium text-center'>Payment Canceled</h3>
            <p className='mt-2 text-sm text-muted-foreground'>Something went wrong with your payment. You have not been charged. </p>
            <p className=' text-sm text-muted-foreground text-center mt-2'>Please try agin later.</p>
          
            <Button className=' mt-5 sm:mt-6 w-full' asChild>
              <Link href={'/'}>
                Back to home
              </Link>

            </Button>
          </div>
        </div>

      </Card>

    </section>
  )
}

export default CancelRout