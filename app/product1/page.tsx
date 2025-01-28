import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CiDeliveryTruck } from "react-icons/ci";

const Page = () => {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <div className="w-full h-auto md:h-[704px] relative">
        <div className="w-full md:w-1/2 h-auto md:h-[444px] mt-8 md:mt-[130px] ml-auto md:ml-[50%] p-4 md:p-0">
          <div className="w-full md:w-[513px] h-auto md:h-[137px] mt-12 md:mt-[48px] ml-4 md:ml-[56px] space-y-4">
            <h1 className="font-[Clash Display] font-normal text-2xl md:text-[32px] leading-tight md:leading-11">
              Luxury homeware for people who love timeless design quality
            </h1>
            <p className="font-[Satoshi] text-lg md:text-xl font-normal leading-7 text-left">
              Shop the new Spring 2022 collection today
            </p>
          </div>
          <div>
            <button className="w-[170px] h-[56px] mt-8 md:mt-[342px] ml-4 md:ml-[56px] px-8 py-4 font-[Satoshi] text-base font-normal bg-[#F9F9F926]">
              View collection
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container px-4 md:px-5 py-12 md:py-24 mx-auto">
        <div className="w-full md:w-[366px] h-auto md:h-[34px] mt-8 md:mt-[60px] mx-auto text-center">
          <h3 className="font-[Clash Display] text-2xl font-normal leading-[33.6px] text-black">
            What makes our brand different
          </h3>
        </div>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {[1, 2, 3, 4].map((item, index) => (
            <div key={index} className="w-full md:w-[270px] h-auto md:h-[124px] space-y-4">
              <h2 className="w-6 h-6">
                <CiDeliveryTruck />
              </h2>
              <h6 className="font-[Clash Display] text-xl font-light text-[#2A254B]">
                Next day as standard
              </h6>
              <p className="font-[Satoshi] text-base font-normal leading-6">
                Order before 3pm and get your order the next day as standard
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* New Ceramics Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-4 md:px-5 py-12 md:py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-8 md:mb-20">
            <h2 className="text-2xl md:text-3xl text-left text-indigo-500 tracking-widest font-medium title-font mb-1">
              New ceramics
            </h2>
          </div>
          <div className="flex flex-wrap -mx-4">
            {[
              { src: "/chair.jpeg", alt: "chair pic", name: "The Dandy chair", price: "£250" },
              { src: "/vase2.jpeg", alt: "vase2 pic", name: "Rustic Vase Set", price: "£155" },
              { src: "/vase3.jpeg", alt: "vase3 pic", name: "The Silky Vase", price: "£125" },
              { src: "/vase4.jpeg", alt: "vase4 pic", name: "The Lucy Lamp", price: "£399" },
            ].map((item, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/4 px-4 py-6 border-l-2 border-gray-200 border-opacity-60">
                <Image src={item.src} alt={item.alt} height={375} width={305} className="w-full h-auto" />
                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                  {item.name}
                </h2>
                <p className="leading-relaxed text-base mb-4">{item.price}</p>
              </div>
            ))}
          </div>
          <button className="flex mx-auto mt-8 md:mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            View collection
          </button>
        </div>
      </section>

      {/* Story Section */}
      <section className="flex flex-col md:flex-row w-full h-auto md:h-[598px]">
        <div className="w-full md:w-1/2 h-auto md:h-[478px] bg-[#2A254B] p-8 md:p-0">
          <div className="w-full md:w-[495px] h-auto md:h-[99px] mt-8 md:mt-[72px] ml-4 md:ml-[84px] space-y-4">
            <h1 className="w-full md:w-[383px] h-auto md:h-[39px] font-[Clash Display] text-white text-2xl font-normal leading-[33.6px]">
              It started with a small idea
            </h1>
            <p className="w-full md:w-[495px] h-auto md:h-[48px] font-[Satoshi] font-normal leading-[21.6px] text-base text-[#F9F9F9] mt-4">
              A global brand with local beginnings, our story began in a small studio in South London in early 2014
            </p>
          </div>
          <button className="w-[170px] h-[56px] mt-8 md:mt-[193px] ml-4 md:ml-[84px] px-5 py-2 font-[Satoshi] text-base font-normal text-white bg-[#443f69]">
            View collection
          </button>
        </div>
        <div className="w-full md:w-1/2 h-auto md:h-[478px]">
          <Image src="/sofa2.jpeg" alt="sofa2 pic" height={478} width={630} className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Newsletter Section */}
      <div className="w-full h-auto md:h-[364px] mt-8 md:mt-[52px] mx-auto p-4 md:p-0">
        <div className="w-full md:w-[571px] h-auto md:h-[114px] mt-8 md:mt-[68px] mx-auto text-center space-y-4">
          <h1 className="w-full md:w-[571px] h-auto md:h-[50px] font-normal font-[Clash Display] text-3xl md:text-4xl">
            Join the club and get the benefits
          </h1>
          <p className="font-[Satoshi] text-base font-normal leading-6">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
          </p>
        </div>
        <div className="flex justify-center items-center w-full md:w-[472px] h-[56px] mt-8 md:mt-[100px] mx-auto">
          <input
            type="text"
            placeholder="Your@email.com"
            className="w-full md:w-[354px] h-[56px] bg-transparent border border-accent px-4"
          />
          <button className="w-[118px] h-[56px] bg-[#2A254B] text-white">
            Sign up
          </button>
        </div>
      </div>
    </main>
  );
};

export default Page;