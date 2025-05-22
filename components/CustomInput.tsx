import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'

interface CustomInputProps {
    form: any;
    name: string;
    label: string;
    placeholder: string;
    type: string;
}

const CustomInput = ({form, name, label, placeholder, type}:CustomInputProps) => {
  return (
    <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <div className='flex flex-col gap-1.5'>
                    <FormLabel className='text-[14px] w-full max-w-[300px] font-semibold text-gray-700'>
                        {label}
                    </FormLabel>
                    <div className='flex w-full flex-col'>
                        <FormControl>
                            <Input
                                placeholder={placeholder}
                                className='w-full max-w-[300px]'
                                type={type || "text"}
                                {...field}
                                
                            />
                        </FormControl>
                        <FormMessage
                        className='text-[12px] text-red-500 mt-2'
                        />
                        </div>   
                </div>
            )}
            />
    )
}

export default CustomInput