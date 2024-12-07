import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CreditCard, Facebook, Instagram, X, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24">
            <div className="flex flex-col md:flex-row justify-between gap-24 ">
                <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
                    <Link href="">
                        <div className="text-2xl tracking-wide">HNQ</div>
                    </Link>
                    <p>Cau Giay, Hanoi, Vietnam </p>
                    <span className="font-semibold">hnq.1707@gmail.com</span>
                    <span className="font-semibold">+84 865 255 655</span>
                    <div className="flex gap-6">
                        <Facebook />
                        <Instagram />
                        <Youtube />
                        <X />
                        
                    </div>
                </div>
                <div className="w-1/2 hidden lg:flex justify-between">
                    <div className="flex flex-col justify-between">
                        <h1 className="font-medium text-lg">COMPANY</h1>
                        <div className="flex flex-col gap-6">
                            <Link href="">About Us</Link>
                            <Link href="">Careers</Link>
                            <Link href="">Affiliates</Link>
                            <Link href="">Blog</Link>
                            <Link href="">Contact Us</Link>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between">
                        <h1 className="font-medium text-lg">SHOP</h1>
                        <div className="flex flex-col gap-6">
                            <Link href="">New Arrivals</Link>
                            <Link href="">Accessories</Link>
                            <Link href="">Men</Link>
                            <Link href="">Women</Link>
                            <Link href="">All Products</Link>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between">
                        <h1 className="font-medium text-lg">HELP</h1>
                        <div className="flex flex-col gap-6">
                            <Link href="">Customer Service</Link>
                            <Link href="">My Account</Link>
                            <Link href="">Find a Store</Link>
                            <Link href="">Legal & Privacy</Link>
                            <Link href="">Gift Card</Link>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
                    <h1 className="font-medium text-lg">SUBCRIBE</h1>
                    <p>Be the first to get the lastest news about trends, promotions, and much more!</p>
                    <div className="flex flex-row">
                        <Input type="text" placeholder="Email address" className="-ml-3 p-4 w-3/4" />
                        <Button className="ml-3 w-1/4 bg-blue-400 text-white">JOIN</Button>
                    </div>
                    <span className="font-semibold">Thanh toán bảo mật</span>
                    <div className="flex justify-between">
                        <CreditCard width={40} height={20} />
                        <CreditCard width={40} height={20} />
                        <CreditCard width={40} height={20} />
                        <CreditCard width={40} height={20} />
                        <CreditCard width={40} height={20} />

                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
                <div className="">© 2024 - HNQ Shop</div>
                <div className="flex flex-col gap-8 md:flex-row">
                    <div className="">
                        <span className="text-gray-500 mr-4">Language</span>
                        <span className="font-medium">Vietnam | Vietnamese</span>
                    </div>
                    <div className="">
                        <span className="text-gray-500 mr-4">Currency</span>
                        <span className="font-medium">$ USD</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
