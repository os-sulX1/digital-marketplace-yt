import prisma from '@/app/lib/db'
import Link from 'next/link'
import React from 'react'
import { ProductCard } from './ProductCard'

const getData = async()=>{
  const data = await prisma.product.findMany({
    select:{
      price:true,
      smallDescription:true,
      category:true,
      name:true,
      id:true,
      images:true,
    },
    take:4,
    orderBy:{
      createdAt:'desc'
    }
  })
  return data
}

const NewestProduct = async () => {
  const data = await getData()
  return (
    <section className='mt-12'>
      <div className="md:flex md:items-center md:justify-between">
        <h2 className='text-2xl font-extrabold tracking-tighter'>Newest Product</h2>
        <Link href={'#'} className='flex gap-2 '>
          <p className='hover:underline'>All Products</p> <span className='text-sm hidden font-medium text-primary hover:text-primary/90 md:block'>&rarr;</span>
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 mt-4 gap-10">
        {
          data.map(product =>(
            <ProductCard images={product.images} key={product.id} id={product.id}
            price={product.price} smallDescription={product.smallDescription} 
            name={product.name} />
          ))
        }
      </div>
    </section>
  )
}

export default NewestProduct