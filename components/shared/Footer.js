import Image from 'next/image';
import React from 'react';
const Footer = () => {
  return (
    <div className="bg-blueGray-100 py-8">
      <div className="container px-4 mx-auto">
        <div className="lg:flex lg:justify-between lg:items-center">
          <div className="sm:flex sm:justify-between sm:items-center mb-14 lg:mb-0">
            <p className="relative mt-4 sm:mt-0 sm:top-1 lg:ml-11 text-xs text-gray-300 font-medium uppercase tracking-widest">
              © Gizmos 2022 All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
