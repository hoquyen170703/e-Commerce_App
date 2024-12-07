"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function CartModal() {

    const cartItem = true

  return (
      <div className="absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20 w-max">
          {!cartItem ? (
            <div className=""> Cart is Empty</div>
          ) : (
                  <>
                      <h2 className="text-xl">SHOPPING CART</h2>
                      <div className="flex felx-col gap-8">

                          <div className="flex gap-4">
                              <Image src="/images/product/bamboo-watch.jpg" alt="" width={72} height={96} className="object-cover rounded-md" />
                              <div className="flex flex-col justify-between w-full">
                                  <div className="">
                                      <div className="flex items-center justify-between gap-8">
                                          <h3 className="font-semibold">Product Name</h3>
                                          <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                                      </div>
                                      <div className="textt-sm text-gray-500">
                                          available
                                      </div>
                                  </div>
                                  <div className="flex justify-between text-sm">
                                      <span className="text-gray-500">Qty. 2</span>
                                      <span className="text-blue-500">Remove</span>
                                  </div>
                              </div>
                          </div>

                      </div>
                      <div className="">
                          <div className="flex items-center justify-between font-semibold">
                              <span className="">Subtotal</span>
                              <span className="">$49</span>
                          </div>
                          <p className="text-gray-500 text-sm mt-2 mb-4">
                              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                          </p>
                          <div className="flex justify-between text-sm">
                              <Button variant="outline" className="rounded-md py-3 px-4 ring-1 ring-gray-300">View Cart</Button>
                              <Button className="">Checkout</Button>
                          </div>
                      </div>


                </>
          )}
    </div>
  )
}
