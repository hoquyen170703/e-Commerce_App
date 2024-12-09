"use client"
import Filter from '@/app/components/Filter'
import ProductList from '@/app/components/ProductList'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import Image from 'next/image'
import React, { Suspense } from 'react'

export default function ListPage() {
  return (
      <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
          <div className="bg-pink-50 p-4 flex justify-between h-64">
              <div className="w-2/3 flex flex-col items-center justify-center gap-8">
                  <h1 className='text-3xl font-semibold leading-[48px] text-gray-700'>Grap up to 50% off on Selected Products</h1>
                  <Button className='rounded-3xl bg-lama text-white w-max py-3 px-5 text'>Buy Now</Button>
              </div>
              <div className="relative w-1/3">
                 <Image src="/images/product/grey-t-shirt.jpg" alt='' fill className='object-contain'/> 
              </div>
          </div>
          <Filter />
          <h1 className='mt-12 text-xl font-semibold'>Shoes For You!</h1>
          <Suspense fallback={<Skeleton />}>
              <ProductList />
          </Suspense>
      </div>
  )
}
