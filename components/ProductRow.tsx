import prisma from "@/app/lib/db"
import Link from "next/link";
import { notFound } from "next/navigation";
import { LoadingProductCard, ProductCard } from "./ProductCard";
import { Suspense } from "react";

type ProductRowProps = {
  category:'newest' | 'templates' | 'uikits' | 'icons'
}

const getData = async ({ category }: ProductRowProps) => {
  switch (category) {
    case 'icons': {
      const data = await prisma.product.findMany({
        where: {
          category: 'icon',
        },
        select: {
          price: true,
          name: true,
          smallDescription: true,
          id: true,
          images:true
        },
        take: 3,
      });
      return {
        data: data,
        title: 'Icons',
        link:'/products/icon'
      };
    }
    case 'newest': {
      const data = await prisma.product.findMany({
        select: {
          price: true,
          name: true,
          smallDescription: true,
          id: true,
          images:true
        },
        orderBy: {
          createdAt: 'desc',
        },
        take: 3,
      });
      return {
        data: data,
        title: 'Newest Products',
        link:'/products/all'
      };
    }
    case 'templates': {
      const data = await prisma.product.findMany({
        where: {
          category: 'template',
        },
        select: {
          price: true,
          name: true,
          smallDescription: true,
          id: true,
          images:true
        },
        take: 3,
      });
      return {
        data: data,
        title: 'Templates',
        link:'/products/template'
      };
    }
    case 'uikits': {
      const data = await prisma.product.findMany({
        where: {
          category: 'uikit',
        },
        select: {
          price: true,
          name: true,
          smallDescription: true,
          id: true,
          images:true
        },
        take: 3,
      });
      return {
        data: data,
        title: 'UI Kits',
        link:'/products/uikit'
      };
    }
    default: {
      return notFound();
    }
  }
};





export const ProductRow = ({category}:ProductRowProps) => {
  return (
    <section className='mt-12'>
      <Suspense fallback={<LoadingState />}>
      <LoadingRow category={category} />
      </Suspense>
  </section>
  )
}






export const LoadingRow = async ({category}:ProductRowProps) => {
  const data = await getData({category:category})
  return (
   <>
    <div className="md:flex md:items-center md:justify-between">
      <h2 className='text-2xl font-extrabold tracking-tighter'>{data.title}</h2>
      <Link href={data.link} className='flex gap-2 '>
        <p className='hover:underline'>All Products</p> <span className='text-sm hidden font-medium text-primary hover:text-primary/90 md:block'>&rarr;</span>
      </Link>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 mt-4 gap-10">
      {
        data.data.map(product =>(
          <ProductCard images={product.images} key={product.id} id={product.id}
          price={product.price} smallDescription={product.smallDescription} 
          name={product.name} />
        ))
      }
    </div>
   </>

  )
}



import React from 'react'
import { Skeleton } from "./ui/skeleton";

export const LoadingState = () => {
  return (
  <div className="">
    <Skeleton className="h-8 w-56 " />
    <div className="grid grid-cols-1 sm:grid-cols-2 mt-4 gap-10 lg:grid-cols-3">
      <LoadingProductCard />
      <LoadingProductCard />
      <LoadingProductCard />
    </div>
  </div>
  )
}
