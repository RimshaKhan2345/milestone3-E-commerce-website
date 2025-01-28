import React from 'react';
import Image from 'next/image';
import { CiDeliveryTruck } from "react-icons/ci";

const page = () => {
  return (
    <div>
      <div className='w-full sm:w-auto h-[277px]'>
        <div className='w-full sm:w-[704px] h-[100px] mt-[88px] sm:ml-[128px] mx-4'>
          <h1 className='font-[Clash Display] font-normal text-4xl sm:text-3xl text-[#2A254B]'>
            A brand built on the love of craftmanship, quality and outstanding customer service
          </h1>
        </div>
        <div className='w-full sm:w-[192px] h-[56px] sm:ml-[1120px]'>
          <button className='py-2 px-6 gap-[10px] text-xs mb-2 text-[#2A254B] bg-white'>
            View our products
          </button>
        </div>
      </div>

      <section className='flex flex-col sm:flex-row w-full sm:w-[1440px] h-[598px]'>
        <div className='w-full sm:w-[634px] h-[478px] bg-[#2A254B]'>
          <div className='w-full sm:w-[495px] h-[99px] mt-[72px] ml-[84px] gap-[25px]'>
            <h1 className='text-white text-2xl font-normal leading-[33.6px]'>
              It started with a small idea
            </h1>
            <p className='text-[16px] text-[#F9F9F9] mt-4'>
              A global brand with local beginnings, our story began in a small studio in South London in early 2014
            </p>
          </div>
          <button className='w-[170px] h-[56px] mt-[193px] ml-[84px] py-2 px-5 font-[Satoshi] font-normal text-left text-white bg-[#443f69]'>
            View collection
          </button>
        </div>
        <div className='w-full sm:w-[630px] h-[478px]'>
          <Image src={'/sofa2.jpeg'} alt={'sofa2 pic'} height={478} width={630} className='w-full h-full object-cover' />
        </div>
      </section>

      <section className='flex flex-col sm:flex-row w-full sm:w-[1440px] h-[603px]'>
        <div className='w-full sm:w-[720px] h-[603px]'>
          <Image src={'/decor.jpeg'} alt={'decor pic'} height={603} width={720} className='w-full h-full object-cover' />
        </div>
        <div className='w-full sm:w-[720px] h-[603px] bg-white'>
          <div className='w-full sm:w-[536px] h-[225px] mt-[72px] ml-[84px]'>
            <h1 className='text-2xl font-normal leading-[33.6px]'>
              Our service isn’t just personal, it’s actually hyper personally exquisite
            </h1>
            <p className='text-[16px] text-[#505977] mt-4'>
              When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
              <br />
              <br />
              Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
            </p>
          </div>
          <button className='w-[150px] h-[56px] mt-[193px] ml-[84px] py-2 px-4 font-[Satoshi] font-normal text-left gap-[10px] bg-[#F9F9F9]'>
            Get in touch
          </button>
        </div>
      </section>

      <div className='container px-5 py-24 mx-auto w-full sm:w-[1440px] h-[355px] gap-0'>
        <div className='w-full sm:w-[366px] mt-[60px] mx-auto'>
          <h3 className='font-[Clash Display] text-2xl text-center text-black'>
            What makes our brand different
          </h3>
        </div>
        <div className='flex flex-col sm:flex-row justify-around mt-10'>
          <div className='w-full sm:w-[270px] h-[124px] mb-6 sm:mb-0 gap-4'>
            <h2><CiDeliveryTruck /></h2>
            <div className='w-[199px] h-[28px]'>
              <h6 className='font-[Clash Display] text-xl text-[#2A254B]'>Next day as standard</h6>
            </div>
            <div className='w-[270px] h-[48px]'>
              <p className='font-[Satoshi] text-[16px] font-normal leading-6'>
                Order before 3pm and get your order the next day as standard
              </p>
            </div>
          </div>
          <div className='w-full sm:w-[270px] h-[124px] mb-6 sm:mb-0 gap-4'>
            <h2><CiDeliveryTruck /></h2>
            <div className='w-[199px] h-[28px]'>
              <h6 className='font-[Clash Display] text-xl text-[#2A254B]'>Next day as standard</h6>
            </div>
            <div className='w-[270px] h-[48px]'>
              <p className='font-[Satoshi] text-[16px] font-normal leading-6'>
                Order before 3pm and get your order the next day as standard
              </p>
            </div>
          </div>
          <div className='w-full sm:w-[270px] h-[124px] gap-4'>
            <h2><CiDeliveryTruck /></h2>
            <div className='w-[199px] h-[28px]'>
              <h6 className='font-[Clash Display] text-xl text-[#2A254B]'>Next day as standard</h6>
            </div>
            <div className='w-[270px] h-[48px]'>
              <p className='font-[Satoshi] text-[16px] font-normal leading-6'>
                Order before 3pm and get your order the next day as standard
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full sm:w-[1273px] h-[364px] mt-[52px] mx-auto'>
        <div className='w-full sm:w-[571px] mt-[68px] mx-auto'>
          <h1 className='font-normal font-[Clash Display] text-4xl text-center'>
            Join the club and get the benefits
          </h1>
          <p className='font-[Satoshi] text-[16px] font-normal leading-6 text-center'>
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores and more
          </p>
          <div className='flex justify-center items-center w-full sm:w-[472px] mt-[100px]'>
            <input
              type="text"
              placeholder='Your@email.com'
              className='w-full sm:w-[472px] h-[56px] bg-transparent border border-accent px-4'
            />
            <button className='w-[118px] h-[56px] py-2 px-6 gap-[10px] bg-[#2A254B] text-white'>
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
