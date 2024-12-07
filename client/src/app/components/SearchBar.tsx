"use client"

import { Button } from "@/components/ui/button"
import {  Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"


export default function SearchBar() {
    const router = useRouter();
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const name = formData.get("name") as string;
        if (name) {
            router.push(`/list?name=${name}`)
        }
    }
  return (
      <div>
        
          <form className="flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1" onSubmit={handleSearch}>
              <Input type="text" name="name" placeholder="Search" className="flex-1 bg-transparent outline-none w-80" />
              <Button className="cursor-pointer">
                  <Search size={24}  className="w-8 h-8" />
              </Button>
          </form>      
              
          
          
    </div>
  )
}
