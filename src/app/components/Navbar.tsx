import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='p-5 bg-blue-300 flex justify-around'>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/contact'>Contact</Link>
    
    </div>
  )
}

export default page