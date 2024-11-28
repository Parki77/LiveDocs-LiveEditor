import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignInpage = () => {
  return (
    <div>
      <main className='Auth-page flex justify-center items-center pt-8'>
        <SignIn/>
      </main>
    </div>
  )
}

export default SignInpage