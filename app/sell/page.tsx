import { TipTapEditor } from '@/components/Editor'
import SelectCategory from '@/components/SelectCategory'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const SellRoute = () => {
  return (
    <section className='min-w-7 mx-auto px-4 md:px-8 mb-14'>
      <Card >
        <form>
          <CardHeader>
            <CardTitle>Sell products with ease</CardTitle>
            <CardDescription>
              Please describe your product in details so that it can be sold
            </CardDescription>
          </CardHeader>
          <CardContent className='flex flex-col gap-y-10 '>
            <div className="flex flex-col gap-y-2">
              <Label>Name</Label>
              <Input type='text' placeholder='Name of your product' />
            </div>
            <div className="flex flex-col gap-y-2">
              <Label>Category</Label>
              <SelectCategory />
            </div>

            <div className="flex flex-col gap-y-2">
              <Label>Price</Label>
              <Input placeholder='34$' type='number' />
            </div>

            <div className="flex flex-col gap-y-2">
              <Label>Small Summary</Label>
              <Textarea placeholder='Please describe your products shortly' />
            </div>

            <div className="flex flex-col gap-y-2">
              <Label >Description</Label>
              <TipTapEditor />
              
            </div>

          </CardContent>
        </form>
      </Card>
    </section>
  )
}

export default SellRoute