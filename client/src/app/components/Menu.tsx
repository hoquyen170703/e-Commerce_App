"use client"
import { useState } from "react"
import { AlignJustify } from "lucide-react"
import Link from "next/link"




export default function Menu() {
    const [open, setOpen] = useState(false)
  return (
      <div>
          <AlignJustify className="cursor-pointer" onClick={() => setOpen((prev) => !prev)} />{
              open && (
                  
                  <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
                      <Link href="">
                          Homepage
                      </Link>
                      <Link href="">
                          Shop
                      </Link>
                      <Link href="">
                          Deals
                      </Link>
                      <Link href="">
                          About
                      </Link>
                      <Link href="">
                          Contact
                      </Link>
                      <Link href="">
                          Logout
                      </Link>
                      
                      </div>
                  
              )
          }
    </div>
  )
}
