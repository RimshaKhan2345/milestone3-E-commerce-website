import Image from "next/image";
import { CiDeliveryTruck } from "react-icons/ci";

export default function Home() {
  return (
    <section>
      {/* Hero Section */}
      <div className="w-full bg-white">
        <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto p-4 md:p-8">
          <div className="w-full md:w-1/2 bg-[#2A254B] p-6 md:p-12">
            <h1 className="text-2xl md:text-3xl font-normal text-white">
              The furniture brand for the future, with timeless designs
            </h1>
            <button className="mt-6 w-40 h-12 bg-[#F9F9F926] text-white">
              View collection
            </button>
            <p className="mt-8 text-white text-sm md:text-base">
              A new era in eco friendly furniture with Avelon, the French luxury retail brand
              with nice fonts, tasteful colors and a beautiful way to display things digitally
              using modern web technologies.
            </p>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <Image
              src={'/chair.jpeg'}
              alt={'chair pic'}
              height={524}
              width={520}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container px-5 py-12 mx-auto">
        <h3 className="text-2xl font-normal text-center mb-8">
          What makes our brand different
        </h3>
        <div className="flex flex-wrap justify-center gap-8">
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/4 p-4">
              <CiDeliveryTruck className="w-6 h-6 mb-4" />
              <h6 className="text-xl font-light text-[#2A254B]">Next day as standard</h6>
              <p className="text-base font-normal">
                Order before 3pm and get your order the next day as standard
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* New Ceramics Section */}
      <div className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <h2 className="text-3xl text-left text-indigo-500 tracking-widest font-medium title-font mb-8">
            New ceramics
          </h2>
          <div className="flex flex-wrap -mx-4">
            {[
              { name: "The Dandy chair", price: "£250", image: "/chair.jpeg" },
              { name: "Rustic Vase Set", price: "£155", image: "/vase2.jpeg" },
              { name: "The Silky Vase", price: "£125", image: "/vase3.jpeg" },
              { name: "The Lucy Lamp", price: "£399", image: "/vase4.jpeg" },
            ].map((item, index) => (
              <div key={index} className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
                <Image
                  src={item.image}
                  alt={item.name}
                  height={375}
                  width={305}
                  className="w-full h-auto"
                />
                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mt-4">
                  {item.name}
                </h2>
                <p className="leading-relaxed text-base mb-4">{item.price}</p>
              </div>
            ))}
          </div>
          <button className="flex mx-auto mt-8 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            View collection
          </button>
        </div>
      </div>

      {/* Popular Products Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <h1 className="sm:text-3xl text-2xl font-normal title-font text-gray-900 mb-8">
            Our popular products
          </h1>
          <div className="flex flex-wrap -mx-4">
            {[
              { name: "The Poplar suede sofa", price: "£980", image: "/Sofa.jpeg" },
              { name: "The Dandy chair", price: "£250", image: "/chair.jpeg" },
              { name: "The Dandy chair", price: "£250", image: "/wood.jpeg" },
            ].map((item, index) => (
              <div key={index} className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
                <div className="bg-indigo-100 p-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    height={350}
                    width={630}
                    className="w-full h-auto"
                  />
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium mt-4">
                  {item.name}
                </h2>
                <p className="leading-relaxed text-base">{item.price}</p>
              </div>
            ))}
          </div>
          <button className="flex mx-auto mt-8 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            View collection
          </button>
        </div>
      </section>

      {/* Newsletter Section */}
      <div className="w-full mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-normal mb-4">
            Join the club and get the benefits
          </h1>
          <p className="text-base mb-8">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
          </p>
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Your@email.com"
              className="w-64 h-12 px-4 border border-gray-300"
            />
            <button className="w-32 h-12 bg-[#2A254B] text-white">
              Sign up
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/2 bg-white p-8">
          <h1 className="text-2xl font-normal mb-4">
            From a studio in London to a global brand with over 400 outlets
          </h1>
          <p className="text-base text-[#505977] mb-8">
            When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
            <br />
            <br />
            Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
          </p>
          <button className="w-40 h-12 bg-[#F9F9F9]">
            Get in touch
          </button>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src={'/room.jpeg'}
            alt={'room pic'}
            height={603}
            width={720}
            className="w-full h-auto"
          />
        </div>
      </section>
    </section>
  );
}