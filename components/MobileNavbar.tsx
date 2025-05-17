"use client";
import React from 'react'
import Image from 'next/image'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'



const MobileNavbar = ({user}:MobileNavProps) => {
    const pathname = usePathname();
  return (
    <section className='w-full max-w-[264px]'>
        <Sheet>
            <SheetTrigger>
                <Image
                src="/icons/hamburger.svg"
                width={30}
                height={30}
                alt="Hamburger menu"
                className="cursor-pointer"
                />
            </SheetTrigger>
            <SheetContent side='left'className='border-none bg-white'>
                <Link href="/" className=" cursor-pointer flex items-center gap-1 px-4 ">
                <Image 
                    src="/icons/logo.svg"
                    width={34}
                    height={34}
                    alt="Horizon logo"
                    
                    priority
                />
                <h1 className="text-26 font-bold text-shadow-black">Horizon</h1>
                </Link>
                <div className='flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto'>
                    <SheetClose asChild>
                        <nav className='flex h-full flex-col gap-6 pt-16 text-white cursor-pointer'>
                                    {sidebarLinks.map((item) => {
                                const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
                                return (
                                    <SheetClose asChild key={item.route}>
                                           <Link href={item.route} key={item.label}
                                            className={cn('flex gap-3 items-center py-1 md:p-3 2xl:p-4 rounded-lg justify-center xl:justify-start', { 'bg-gradient-to-br from-blue-200 to-blue-600 hover:scale-105 transform transition-all duration-300': isActive })}
                                            >
                                            <div className="relative size-6">
                                                <Image 
                                                src={item.imgURL}
                                                alt={item.label}
                                                fill
                                                className={cn({
                                                    'brightness-[3] invert-0': isActive
                                                })}
                                                />
                                            </div>
                                                <p className={cn("text-16 font-semibold text-black hover:scale-105 max-xl:hidden", { "!text-white": isActive })}>
                                                    {item.label}
                                                </p>
                                            </Link>
                                        </SheetClose>
                                )
                                })}
                        </nav>
                    </SheetClose>                                       
                </div>               
            </SheetContent>
            </Sheet>

    </section>
  )
}

export default MobileNavbar