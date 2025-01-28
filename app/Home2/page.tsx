import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CiDeliveryTruck } from "react-icons/ci";

const page = () => {
  return (
    <main>
      <div className='w-full h-auto'>
        <div className='w-full h-auto mt-[30px] px-4'>
          <div className='sm:w-full lg:w-[630px] h-auto mt-[130px] mx-auto'>
            <div className='w-full lg:w-[513px] mt-[48px] gap-[10px]'>
              <h1 className='font-[Clash Display] font-normal text-2xl sm:text-xl leading-11'>
                Luxury homeware for people who love timeless design quality
              </h1>
              <p className='font-[Satoshi] text-lg sm:text-base font-normal leading-7 text-left'>
                Shop the new Spring 2022 collection today
              </p>
            </div>
            <div>
              <button className='w-[170px] h-[56px] mt-[30px] mx-auto sm:mt-[20px] sm:w-[150px] sm:h-[48px] pt-4 pr-8 pb-4 pl-8 font-[Satoshi] text-sm text-[#2A254B] bg-[#F9F9F926]'>
                View collection
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className='container px-5 py-24 mx-auto w-full'>
          <div className='text-center mb-20'>
            <h3 className='font-[Clash Display] text-2xl font-normal text-[#2A254B]'>
              What makes our brand different
            </h3>
          </div>
          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='w-full h-auto flex justify-center items-center'>
              <CiDeliveryTruck className='text-3xl text-[#2A254B]' />
              <div className='ml-4'>
                <h6 className='font-[Clash Display] text-lg font-light text-[#2A254B]'>
                  Next day as standard
                </h6>
                <p className='font-[Satoshi] text-sm text-[#505977] leading-6'>
                  Order before 3pm and get your order the next day as standard
                </p>
              </div>
            </div>
            <div className='w-full h-auto flex justify-center items-center'>
              <CiDeliveryTruck className='text-3xl text-[#2A254B]' />
              <div className='ml-4'>
                <h6 className='font-[Clash Display] text-lg font-light text-[#2A254B]'>
                  Next day as standard
                </h6>
                <p className='font-[Satoshi] text-sm text-[#505977] leading-6'>
                  Order before 3pm and get your order the next day as standard
                </p>
              </div>
            </div>
            <div className='w-full h-auto flex justify-center items-center'>
              <CiDeliveryTruck className='text-3xl text-[#2A254B]' />
              <div className='ml-4'>
                <h6 className='font-[Clash Display] text-lg font-light text-[#2A254B]'>
                  Next day as standard
                </h6>
                <p className='font-[Satoshi] text-sm text-[#505977] leading-6'>
                  Order before 3pm and get your order the next day as standard
                </p>
              </div>
            </div>
            <div className='w-full h-auto flex justify-center items-center'>
              <CiDeliveryTruck className='text-3xl text-[#2A254B]' />
              <div className='ml-4'>
                <h6 className='font-[Clash Display] text-lg font-light text-[#2A254B]'>
                  Next day as standard
                </h6>
                <p className='font-[Satoshi] text-sm text-[#505977] leading-6'>
                  Order before 3pm and get your order the next day as standard
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center w-full mb-20">
            <h2 className="text-3xl text-indigo-500 tracking-widest font-medium title-font mb-1">
              New ceramics
            </h2>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="w-full p-6 border-l-2 border-gray-200 border-opacity-60">
              <Image src={'/chair.jpeg'} alt={'chair pic'} height={375} width={305} />
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                The Dandy chair
              </h2>
              <p className="leading-relaxed text-base mb-4">£250</p>
            </div>
            <div className="w-full p-6 border-l-2 border-gray-200 border-opacity-60">
              <Image src={'/vase2.jpeg'} alt={'vase2 pic'} height={375} width={305} />
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Rustic Vase Set
              </h2>
              <p className="leading-relaxed text-base mb-4">£155</p>
            </div>
            <div className="w-full p-6 border-l-2 border-gray-200 border-opacity-60">
              <Image src={'/vase3.jpeg'} alt={'vase3 pic'} height={375} width={305} />
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                The Silky Vase
              </h2>
              <p className="leading-relaxed text-base mb-4">£125</p>
            </div>
            <div className="w-full p-6 border-l-2 border-gray-200 border-opacity-60">
              <Image src={'/vase4.jpeg'} alt={'vase4 pic'} height={375} width={305} />
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                The Lucy Lamp
              </h2>
              <p className="leading-relaxed text-base mb-4">£399</p>
            </div>
          </div>
          <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            View collection
          </button>
        </div>
      </section>

      <section className="flex w-full h-auto py-10 px-4">
        <div className="w-full lg:w-[634px] h-auto bg-[#2A254B]">
          <div className="w-full lg:w-[495px] mt-[72px] ml-4 gap-[25px]">
            <h1 className="text-white text-2xl font-normal leading-[33.6px]">
              It started with a small idea
            </h1>
            <p className="text-white text-sm lg:text-base mt-4">
              A global brand with local beginnings, our story began in a small studio in South London in early 2014
            </p>
          </div>
          <button className="w-[170px] h-[56px] mt-[193px] ml-[84px] py-2 px-5 font-[Satoshi] text-white gap-[10px] bg-[#443f69]">
            View collection
          </button>
        </div>
        <div className="w-full lg:w-[630px] h-auto">
          <Image src={'/sofa2.jpeg'} alt={'sofa2 pic'} height={478} width={630} />
        </div>
      </section>

      <div className="w-full h-auto mt-12">
        <div className="w-full lg:w-[571px] mx-auto text-center">
          <h1 className="text-3xl text-[#2A254B] font-normal">
            Join the club and get the benefits
          </h1>
          <p className="text-sm lg:text-base text-[#505977] mt-4">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
          </p>
        </div>
        <div className="flex justify-center items-center mt-8">
          <input
            type="text"
            placeholder="Your@email.com"
            className="w-full sm:w-[472px] h-[56px] bg-transparent border border-accent p-4"
          />
          <button className="w-[118px] h-[56px] py-2 px-6 text-center bg-[#2A254B] text-white ml-4">
            Sign up
          </button>
        </div>
      </div>
    </main>
  );
};

export default page;
