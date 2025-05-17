import HeaderBox from '@/components/HeaderBox'
import TotalBalancebox from '@/components/TotalBalancebox'
import React from 'react'


const Home = () => {
    const loggedIn={firstName: "Arif"}
  return (
    <section className=' no-scrollbar flex w-full flex-row max-xl:max-h-screen max-xl:overflow-y-scroll'>
        <div className=' no-scrollbar flex w-full flex-1 flex-col gap-8 px-5 sm:px-8 py-7 lg:py-12 xl:max-h-screen xl:overflow-y-scroll'>
            <header className='flex flex-col justify-between gap-8'>
                <HeaderBox
                type="greeting"
                title="Welcome"
                user={loggedIn?.firstName || "guest"}
                subtext="Access and manage your account and transactions efficiently."
                />
                <TotalBalancebox
                accounts={[]}
                totalBanks={1}
                totalCurrentBalance={1250.35}
                />
            </header>
        </div>
    </section>
  )
}

export default Home