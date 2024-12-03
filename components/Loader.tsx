import Image from 'next/image'
<<<<<<< HEAD

const Loader = () => {
  return (
    <div className="loader">
      <Image 
=======
import React from 'react'

const Loader = () => {
  return (
    <div>
      <Image
>>>>>>> 8c25921bc852ac713bbc47310cb504002b39defe
        src="/assets/icons/loader.svg"
        alt="loader"
        width={32}
        height={32}
<<<<<<< HEAD
        className="animate-spin"
      />
      Loading...
=======
        className='animate-spin'
      
      />
>>>>>>> 8c25921bc852ac713bbc47310cb504002b39defe
    </div>
  )
}

export default Loader