import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className='h-12 bg-blue-500 text-white'>
      <div className='flex justify-center items-center'>
        <ul className='flex space-x-5 mt-2'>
            <li><Link href="/">Plant pots</Link></li>
            <li><Link href="/Home2">Ceramics</Link></li>
            <li><Link href="/about">Tables</Link></li>
            <li><Link href="/product1">Chairs</Link></li>
            <li><Link href="/product2">Crockery</Link></li>
            <li><Link href="/shopping">Tableware</Link></li>
            </ul>
      </div>
    </nav>
  )
}

export default Navbar
