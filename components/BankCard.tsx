import React from 'react'
import Link from 'next/link'
import { formatAmount } from '@/lib/utils'
import Image from 'next/image'
const BankCard = ({account, userName, showBalance=true }: CreditCardProps) => {
  return (
    <div className='flex flex-col '>
        <Link href="/" className='relative flex h-[190px] w-full max-w-[320px] justify-between rounded-[20px] border border-white bg-blue-800 shadow backdrop-blur-[6px]'>
            <div className='relative z-10 flex size-full max-w-[228px] flex-col justify-between rounded-l-[20px] bg-gray-700  px-5 pb-4 pt-5'>
                <h1 className='text-16 font-semibold text-white '>
                    {account.name}
                </h1>
                <p className='font-ibm-plex-serif font-black text-white'>
                    {formatAmount(account.currentBalance)}
                </p>
            </div>
            <article className='flex flex-col gap-2'>
                <div className='flex justify-between'>
                    <h1 className='text-12 font-semibold text-white'>{userName}</h1>
                    <h2 className='text-12 font-semibold text-white'>** / **</h2>
                </div>
                    <p className='text-14 font-sembold tracking-[1.1px] text-white '>
                        **** **** **** <span className='text-16'>1234</span>
                    </p>
            </article>
            <div className='bank-card_icon'>
                <Image src="/icons/Paypass.svg"
                width={20}
                height={24} 
                alt='bank card icon'
                />
                <Image src="/icons/mastercard.svg"
                width={45}
                height={32} 
                alt='bank card icon'
                className='ml-3'
                />
            </div>
            <Image
            src="/icons/lines.png"
            width={380}
            height={190}
            alt="background"
            className='absolute top-0 left-0'
            />
        </Link>

        {/* cOPY */}

    </div>
  )
}

export default BankCard