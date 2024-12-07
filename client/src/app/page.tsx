"use client"
import * as React from "react"




import Slider from './components/Slider';
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import ProductList from "@/app/components/ProductList";
import CategoryList from "@/app/components/CategoryList";



export default function Home() {

  return (


    <div className="">

      <Slider/>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Các sản phẩm phổ biến</h1>
        <Suspense fallback={<Skeleton />}>
          <ProductList/>
        </Suspense>
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Categories</h1>
        <Suspense fallback={<Skeleton />}>
          <CategoryList />
        </Suspense>
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Sản phẩm mới nhất</h1>
        <Suspense fallback={<Skeleton />}>
          <ProductList />
        </Suspense>
      </div>
    </div>


  );
}
