import { SignUp } from '@clerk/nextjs'
import React from 'react'

const SignUppage = () => {
  return (
    <div>
      <main className='Auth-page flex justify-center items-center'>
        <SignUp/>
      </main>
    </div>
  )
}

export default SignUppage