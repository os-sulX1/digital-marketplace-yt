import Image from 'next/image'
import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Button } from './ui/button'
import Link from 'next/link'
import { Skeleton } from './ui/skeleton'

type ProductCardProps = {
  images:string [],
  name:string,
  price:number,
  smallDescription:string,
  id:string
}

export const ProductCard = ({images,id ,name ,price , smallDescription}:ProductCardProps) => {
  return (
    <div className="rounded-lg border-2 ">
      <div className="w-full mx-auto ">
      <Carousel>
        <CarouselContent>
          {images.map((item, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[230px]">
                <Image 
                  src={item} 
                  alt='Product Image' 
                  layout="fill" 
                  className='object-cover w-full h-full rounded-lg' 
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='absolute left-0 top-1/2 transform -translate-y-1/2 ml-5' />
        <CarouselNext className='absolute right-0 top-1/2 transform -translate-y-1/2 mr-5' />
      </Carousel>
    </div>


     
      <div className="flex justify-between items-center mt-2">
        <h1 className='font-semibold text-xl'>{name}</h1>
        <h3 className='inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/10'>${price}</h3>
      </div>
      <p className='text-gray-600 line-clamp-2 text-sm mt-2 h-16'>{smallDescription}</p>
      <Button asChild className='w-full mt-5 '>
        <Link href={`/product/${id}`} >
          Learn More!
        </Link>

      </Button>
    </div>
  )
}






export const LoadingProductCard = () => {
  return (
    <div className="flex flex-col">
      <Skeleton className='w-full h-[230px]' />
      <div className="flex flex-col mt-2 gap-y-2">
        <Skeleton className='h-4 w-full' />
        <Skeleton className='w-full h-6' />
      </div>
      <Skeleton className='w-full h-10 mt-5' />
    </div>
  )
}

