import React from 'react'
import Link from 'next/link'

const Header = ({children}:HeaderProps) => {
  return (
    <div className='header'>
      <Link href='/' className='md:flex-1'>
        <img
          src="/assets/icons/logo.svg"
          alt="logo with name"
          width={120}
          height={32}
          className='hidden md:block'
        
        />
        <img
          src="/assets/icons/logo-icon.svg"
          alt="logo "
          width={32}
          height={32}
          className='mr-2 md:hidden'
        
        />

        
      
      </Link>
      {children}
      
    </div>
  )
}

export default Header