"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'


import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})



const AuthForm = ({type}:{type: string}) => {
    const [user, setUser ] = useState(null)
    // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <section className='flex min-h-screen w-full max-w-[420px] flex-col justify-center gap-5 py-10 md:gap-8'>
        <header className='flex flex-col gap-5 md:gap-8 '>
            <div className=' shadow px-12 py-12'>
            <Link href="/" className=" cursor-pointer flex items-center gap-1 ">
                <Image 
                    src="/icons/logo.svg"
                    width={34}
                    height={34}
                    alt="Horizon logo"                                       
                />
                <h1 className="text-26 font-bold text-shadow-black">Horizon</h1>
            </Link>
                <div className='flex flex-col gap-1 md:gap-2'>
                    <h1 className='text-black text-[24px] lg:text-[36px] font-bold'>
                    {user ? "Link Account"
                        : type === "sign-in" 
                        ? "Sign In"
                        : "Sign Up"}

                        <p className='text-[16px] font-normal text-gray-600'>
                            {user ? "Link your account to get started "
                            : "Please enter your details." }
                        </p>
                    </h1>
                </div>
            </div>
        </header>
        {user ? (
            <div className='flex flex-col gap-4'>
                {/* plaid link */}
            </div>
        ) : (
            <>
             <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <div className='flex flex-col gap-1.5'>
                                <FormLabel className='text-[14px] w-full max-w-[300px] font-semibold text-gray-700'>
                                    Email
                                </FormLabel>
                                <div className='flex w-full flex-col'>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter your email"
                                            className='w-full max-w-[300px]'
                                            {...field}
                                        />
                                    </FormControl>
                                    </div>   
                            </div>
                        )}
                        />
                        <Button type="submit" className='cursor-pointer hover:scale-105'>Submit</Button>
                    </form>
                </Form>
            </>
        
        )}
    </section>
  )
}

export default AuthForm