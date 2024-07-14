import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import React from 'react'
import prisma from '../lib/db'
import { Button } from '@/components/ui/button'
import { CreateStripeAccountLink, GetStripeDashboardLink } from '../action'
import { SubmitButton } from '@/components/SubmitButton'
import {unstable_noStore as noStore} from 'next/cache'



const getData =  async(userId : string)=>{

  const data = await prisma.user.findUnique({
    where:{
      id:userId
    },
    select:{
      stripeConnectedLinked:true,
    }
  })
  return data
}

const BillingPage = async () => {
  noStore()
  const {getUser} = getKindeServerSession()
  const user = await getUser()
  if(!user){
    throw new Error('Unauthorized')
  }
  const data = await getData(user.id)
  if(data?.stripeConnectedLinked ===undefined) throw new Error('Something went wrong')

 

  return (
    <section className='max-w-7xl mx-auto px-4 md:px-8'>
      <Card>
        <CardHeader>
          <CardTitle>Billing</CardTitle>
          <CardDescription>
            Find all your details regarding your payments.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {
            data.stripeConnectedLinked ===false &&(
              <form action={CreateStripeAccountLink}>
                <SubmitButton title='Link your ACCOUNT TO Stripe' />
              </form>
            )
          }

          {
            data.stripeConnectedLinked ===true && (
              <form action={GetStripeDashboardLink}>
                <SubmitButton  title='View dashboard'/>
              </form>
            )
          }
        </CardContent>

      </Card>
    </section>
  )
}

export default BillingPage