"use client";
import React from 'react'
import AnimatedCounter from './AnimatedCounter'
import DoughnutChart from './DoughnutChart';


const TotalBalancebox = ({
    accounts=[],
    totalBanks,
    totalCurrentBalance
}: TotalBalanceBoxProps)=>
  {
  return (
  <section className='flex w-full items-center justify-between gap-4 rounded-xl border border-gray-200 p-4 shadow-xl sm:gap-6 sm:p-6'>
    <div className='flex size-full max-w-[100px] items-center justify-center sm:max-w-[120px]'>
      {/* Doughnut chart */}
      <DoughnutChart accounts={accounts}/>
    </div>
    <div className='flex flex-1 flex-col gap-6 items-center'>
      <h2 className='text-18 font-semibold text-gray-900'>
        Bank Accounts: {totalBanks}
      </h2>
      <div className='flex flex-col items-center gap-2'>
        <p>Total Current Balance</p>
          <p className='text-24 lg:text-30 font-semibold text-gray-900 flex items-center gap-2'>
              <AnimatedCounter amount={totalCurrentBalance}/>
          </p>

      </div>
    </div>
  </section>
)
}

export default TotalBalancebox