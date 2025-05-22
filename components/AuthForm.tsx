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
import CustomInput from './CustomInput';
import { Loader } from 'lucide-react';


const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters",
  }),
  username: z.string().min(3, {
    message: "Username must be at least 3 characters",
  }),
});
const AuthForm: React.FC<{ type: "sign-in" | "sign-up" }> = ({ type }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },
  });


  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    console.log(values);
    setTimeout(() => setIsLoading(false), 1000);
  }
  return (
  <section className='flex min-h-screen w-full max-w-[420px] flex-col justify-center gap-5 py-10 md:gap-8'>
    <header className='flex flex-col gap-5 md:gap-8 '>
      <div className='shadow px-12 py-12'>
        <Link href="/" className="cursor-pointer flex items-center gap-1">
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
          </h1>
          <p className='text-[16px] font-normal text-gray-600'>
            {user ? "Link your account to get started "
              : "Please enter your details."}
          </p>
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
            <CustomInput 
              form={form}
              name="username"
              label="username"
              placeholder="Enter your username"
              type="text"
            />
            <CustomInput 
              form={form}
              name="password"
              label="password"
              placeholder="Enter your password"
              type="password"
            />
            <Button type="submit" disabled={isLoading} className='cursor-pointer hover:scale-105 bg-blue-500 text-blue-700'>
              {isLoading ? (
                <>
                <Loader
                  size={20}
                  className="animate-spin" 
                /> 
                &nbsp;Loading...
                </>
              ) : type === "sign-in" ? "Sign In" : "Sign Up"
              }
            </Button>
          </form>
        </Form>
      </>
    )}
  </section>
);
};


export default AuthForm