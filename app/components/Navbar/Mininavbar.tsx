import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";
const Mininavbar = () => {
  return (

<nav>
<div className='flex w-[390px] h-[69px] sm:w-[1400px] ml[28px] border-r-[1px] border-[#000000]'>
  <h3 className='justify-start items-start w-4 h-4 mt-[26px] ml-5 text-[#726E8D]'><IoMdSearch size={16} /></h3>
<h1 className='justify-centre items-center font-[Clash Display] font-[400] text-[24px] mt-[20px] ml-[687px] text-[#22202E]'> Avion </h1>     
    <h3 className='justify-end items-end w-4 h-4 mt-[26px] ml-[496px] text-[#726E8D]'><GiShoppingCart size={16} /></h3>
    <h3 className='justify-end items-end w-4 h-4 mt-[26px] ml-[4px] text-[#726E8D]'><FaRegUser /></h3>
    </div>
    </nav>
  )
}

export default Mininavbar
