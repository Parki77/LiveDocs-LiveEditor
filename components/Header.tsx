<<<<<<< HEAD
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
      <Link href='/' className="md:flex-1">
        <Image 
          src="/assets/icons/logo.svg"
          alt="Logo with name"
          width={120}
          height={32}
          className="hidden md:block"
        />
        <Image 
          src="/assets/icons/logo-icon.svg"
          alt="Logo"
          width={32}
          height={32}
          className="mr-2 md:hidden"
        />
      </Link>
      {children}
=======
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
      
>>>>>>> 8c25921bc852ac713bbc47310cb504002b39defe
    </div>
  )
}

export default Header