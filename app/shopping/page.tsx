import React from 'react'
import Image from 'next/image'

const Page = () => {
  return (
    <div className='w-full h-auto bg-[#F9F9F9] px-4 sm:px-8'>
      <h1 className='font-[Clash Display] font-[400] text-4xl text-[#2A2B45] mt-16 text-center sm:text-left'>
        Your shopping cart
      </h1>

      {/* Product Header */}
      <div className='grid grid-cols-3 gap-4 mt-4 text-center sm:text-left'>
        <h6 className='font-medium text-lg'>Product</h6>
        <h6 className='font-medium text-lg'>Quantity</h6>
        <h6 className='font-medium text-lg'>Total</h6>
      </div>

      {/* Divider */}
      <div className='w-full mt-4 mb-8 border-t border-[#EBE8F4]'></div>

      {/* Cart Items */}
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
        {/* Product 1 */}
        <div className='flex flex-col items-center sm:items-start'>
          <Image src={'/vase.jpeg'} alt='vase pic' height={140} width={155} />
          <div className='mt-4'>
            <h3 className='text-lg font-semibold'>Graystone vase</h3>
            <p className='text-sm text-gray-600'>
              A timeless ceramic vase with a tri-color grey glaze.
            </p>
          </div>
        </div>

        {/* Quantity & Total for Product 1 */}
        <div className='flex flex-col items-center sm:items-start'>
          <h3 className='text-lg mt-4 sm:mt-0'>1</h3>
        </div>
        <div className='flex flex-col items-center sm:items-start'>
          <h3 className='text-lg mt-4 sm:mt-0'>$85</h3>
        </div>

        {/* Product 2 */}
        <div className='flex flex-col items-center sm:items-start'>
          <Image src={'/plant.jpeg'} alt='plant pic' height={134} width={109} />
          <div className='mt-4'>
            <h3 className='text-lg font-semibold'>Basic white vase</h3>
            <p className='text-sm text-gray-600'>
              Beautiful and simple this is one for the classics.
            </p>
          </div>
        </div>

        {/* Quantity & Total for Product 2 */}
        <div className='flex flex-col items-center sm:items-start'>
          <h3 className='text-lg mt-4 sm:mt-0'>2</h3>
        </div>
        <div className='flex flex-col items-center sm:items-start'>
          <h3 className='text-lg mt-4 sm:mt-0'>$125</h3>
        </div>
      </div>

      {/* Divider between cart and subtotal */}
      <div className='w-full mt-8 mb-8 border-t border-[#EBE8F4]'></div>

      {/* Subtotal */}
      <h2 className='text-lg font-medium text-[#242643] sm:text-right'>
        Subtotal: <span className='font-semibold'>$210</span>
      </h2>
    </div>
  )
}

export default Page
