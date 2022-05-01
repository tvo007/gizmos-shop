import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import bgPlaceholder
  from '../../assets/images/ecommerce-headers/bg-placeholder.png';

const Hero = () => {
  return (
    <div className="pb-10 xl:pb-20">
      <div className="relative py-24 xl:pt-72 xl:pb-24 rounded-9xl overflow-hidden">
        <Image
          className="absolute top-0 left-0 h-full w-full object-cover"
          src={bgPlaceholder}
          alt=""
          layout="fill"
        />
        <div className="relative container px-4 mx-auto">
          <div className="w-full md:w-2/3 lg:w-1/2 mb-24 xl:mb-0">
            <span className="block mb-9 font-medium tracking-widest uppercase text-xs text-gray-200">
              Get 20% off card
            </span>
            <h1 className="mb-16 font-heading font-medium text-white text-9xl md:text-10xl xl:text-13xl leading-tight">
              The ultimate multi tool option
            </h1>
            <Link href="/products">
              <a className="inline-block py-4 px-10 w-full md:w-auto md:mr-6 mb-2 md:mb-0 leading-8 font-heading font-medium tracking-tighter text-xl text-white text-center bg-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-blue-600 rounded-xl">
                Shop now
              </a>
            </Link>
            {/* <a className="inline-block py-4 px-10 w-full md:w-auto leading-8 font-heading font-medium tracking-tighter text-xl text-center bg-white focus:ring-2 focus:ring-gray-100 focus:ring-opacity-50 hover:bg-gray-100 rounded-xl">
              More
            </a> */}
          </div>
          <div className="relative text-center z-20">
            <a className="inline-block xl:-mt-20 transform hover:scale-90 transition duration-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
