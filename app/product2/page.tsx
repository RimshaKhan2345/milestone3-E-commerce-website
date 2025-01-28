import React from 'react'
import Image from 'next/image'

const Page = () => {
  return (
    <div>
      <div className='w-full h-[209px]'>
        <h1 className='font-[Clash Display] text-4xl font-normal leading-[50.4px] text-left mt-[123px] ml-[20px] sm:ml-[40px] md:ml-[80px]'>
          All Products
        </h1>
      </div>
      <div className='text-gray-600 body-font'>
        <div className='container px-5 py-2 mx-auto'>
          {/* Product Grid */}
          <div className="flex flex-wrap">
            {/* Single Product */}
            <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <Image src={'/chair.jpeg'} alt={'chair pic'} height={375} width={305} />
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                The Dandy chair
              </h2>
              <p className="leading-relaxed text-base mb-4">£250</p>
            </div>
            {/* Repeat this block for other products */}
            <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <Image src={'/vase2.jpeg'} alt={'vase2 pic'} height={375} width={305} />
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Rustic Vase Set
              </h2>
              <p className="leading-relaxed text-base mb-4">£155</p>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <Image src={'/vase3.jpeg'} alt={'vase3 pic'} height={375} width={305} />
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                The Silky Vase
              </h2>
              <p className="leading-relaxed text-base mb-4">£125</p>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <Image src={'/vase4.jpeg'} alt={'vase4 pic'} height={375} width={305} />
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                The Lucy Lamp
              </h2>
              <p className="leading-relaxed text-base mb-4">£399</p>
            </div>
          </div>

          {/* Repeating the grid for more products */}
          <div className="flex flex-wrap">
            {/* Single Product */}
            <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <Image src={'/chair.jpeg'} alt={'chair pic'} height={375} width={305} />
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                The Dandy chair
              </h2>
              <p className="leading-relaxed text-base mb-4">£250</p>
            </div>
            {/* Repeat this block for other products */}
            <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <Image src={'/vase2.jpeg'} alt={'vase2 pic'} height={375} width={305} />
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Rustic Vase Set
              </h2>
              <p className="leading-relaxed text-base mb-4">£155</p>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <Image src={'/vase3.jpeg'} alt={'vase3 pic'} height={375} width={305} />
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                The Silky Vase
              </h2>
              <p className="leading-relaxed text-base mb-4">£125</p>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <Image src={'/vase4.jpeg'} alt={'vase4 pic'} height={375} width={305} />
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                The Lucy Lamp
              </h2>
              <p className="leading-relaxed text-base mb-4">£399</p>
            </div>
          </div>

          {/* Call to action button */}
          <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            View collection
          </button>
        </div>
      </div>
    </div>
  )
}

export default Page
