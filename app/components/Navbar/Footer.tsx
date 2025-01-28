import React from 'react'
import { MdFacebook } from "react-icons/md";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import Link from 'next/link';
const Footer = () => {
  return (
    <div>
    <footer className="' text-white py-10 w-full h-[380px] bg-[#2A254B] gap-0'">
      <div className="contLinkiner mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
          {/* Menu Section */}
          <div className='grid-cols-2 sm:grid-cols-4'>
            <h3 className="text-xl font-bold mb-4">Menu</h3>
            <ul className="text-sm space-y-2">
              <li><Link href="#" className="hover:underline">New arrivals</Link></li>
              <li><Link href="#" className="hover:underline">Best sellers</Link></li>
              <li><Link href="#" className="hover:underline">Recently viewed</Link></li>
              <li><Link href="#" className="hover:underline">Popular this week</Link></li>
              <li><Link href="#" className="hover:underline">All products</Link></li>
            </ul>
    </div>
          {/* Categories */}
          <div className='grid-cols-1 sm:grid-cols-4'>
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <ul className="text-sm space-y-2">
              <li><Link href="#" className="hover:underline">Crokery</Link></li>
              <li><Link href="#" className="hover:underline">Furniture</Link></li>
              <li><Link href="#" className="hover:underline">Homeware</Link></li>
              <li><Link href="#" className="hover:underline">Plant pots</Link></li>
              <li><Link href="#" className="hover:underline">Chairs</Link></li>
              <li><Link href="#" className="hover:underline">Crockery</Link></li>
            </ul>
          </div>

          {/* Our company */}
          <div className='grid-cols-1 sm:grid-cols-4'>
            <h3 className="text-xl font-bold mb-4">Our company</h3>
            <ul className="text-sm space-y-2">
              <li><Link href="#" className="hover:underline">About us</Link></li>
              <li><Link href="#" className="hover:underline">Vacancies</Link></li>
              <li><Link href="#" className="hover:underline">Contact us</Link></li>
              <li><Link href="#" className="hover:underline">Privacy</Link></li>
              <li><Link href="#" className="hover:underline">Return Policy</Link></li>
            </ul>
          </div>
    {/* Join our mailing list*/}
    <div className='flex justify-end text-white gap-1'>
<label htmlFor="email"></label>
<input type="text" placeholder='Your@email.com'
className=' w-[627px] h-[56px] bg-transparent border border-accent'
id='email '/> 
<button className='w-[118px] h-[56px] p-[16px 32px 16px 32px] gap-[10px] bg-white text-black'>Sign up</button>
        </div>
        </div>
        {/* Bottom Footer */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm text-gray-500">
            © Copyright 2022 Avion LTD.
          </p>
          <p className='flex justify-end items-center text-white gap-3'>
          <MdFacebook size={16}/>
          <FaTwitter size={16} />
          <TiSocialLinkedin size={16} />
          <TiSocialYoutube size={16} />
          </p>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
