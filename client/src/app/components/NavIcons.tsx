"use client"
import CartModal from '@/app/components/CartModal'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Bell, LogOut, ShoppingCart, User } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function NavIcons() {
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)


    const router = useRouter()


    let isLoggedIn = false;

    const handleProfile = () => {
        if (!isLoggedIn) {
            router.push("/login"); 
            isLoggedIn = true;
            setIsProfileOpen((prev) => !prev)
        }
        setIsProfileOpen((prev) => !prev)
    }
    return (
        <div className='flex items-center gap-4 xl:gap-6 relative'>
            <Avatar className="p-1 cursor-pointer " onClick={handleProfile}>
                <AvatarImage src="/images/avatar/amyelsner.png" />
                <AvatarFallback>
                    <User size={32} className="p-1 cursor-pointer" />
                </AvatarFallback>
            </Avatar>
            {isProfileOpen && (
                <div className='absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20'>
                    <Link href="" className='flex'>
                        <User />
                        Profile</Link>
                    <div className='flex mt-2 cursor-pointer'>
                        <LogOut />
                        Logout</div>
                </div>
            )}
            <Bell size={32} className="p-1 cursor-pointer" />
            <div className='relative cursor-pointer'>
                <ShoppingCart size={32} className="p-1 cursor-pointer" onClick={() => setIsCartOpen((prev) => !prev)} />

            </div>
            <div className='absolute -top-3 -right-3 w-6 h-6 bg-[#F35C7A] rounded-full text-white text-sm flex items-center justify-center'>
                2
            </div>
            {
                isCartOpen && (
                    <CartModal />
                )
            }
        </div>           
    )
}
