import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Check } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function CancelRoute() {
  return (
    <section className='w-full min-h-[80hv] flex items-center justify-center'>
      <Card className='w-[350px] mt-36'>
        <div className="p-6">
          <div className="w-full flex justify-center">
            <Check className='w-12 h-12 rounded-full bg-green-500/30 text-green-500 p-2' />
          </div>
          <div className="mt-3 text-clip sm:mt-5 w-full ">
            <h3 className='text-lg leading-6  font-medium text-center'>Payment Successful</h3>
            <p className='mt-2 text-sm text-muted-foreground'>Congrats to your purchase ! </p>
            <p className=' text-sm text-muted-foreground text-center mt-2'>Please Check your email for further instructions.</p>
          
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

export default CancelRoute