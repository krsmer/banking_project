import AuthForm from '@/components/AuthForm'
import React from 'react'

const SignUp = () => {
  return (
    <section className='flex justify-center items-center size-full max-sm:px-6'>
      <AuthForm type = "sign-up" />
    </section>
  )
}

export default SignUp