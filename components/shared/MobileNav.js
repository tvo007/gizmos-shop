import React from 'react';
import Link from 'next/link';

const MobileNav = ({handleDrawerClose}) => {
  return (
    <div className="navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-md z-50">
      <div
        className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"
        onClick={handleDrawerClose}
      />
      <nav className="relative flex flex-col py-20 px-12 md:pl-18 md:pr-16 h-full w-full bg-darkBlueGray-700 overflow-y-auto">
        <button
          className="navbar-close absolute top-5 p-6 right-5"
          onClick={handleDrawerClose}
        >
          <svg
            width="14"
            height="13"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="13.495"
              y1="0.494975"
              x2="1.49498"
              y2="12.495"
              stroke="#326BFF"
              strokeWidth="1.4"
            />
            <line
              x1="12.505"
              y1="12.495"
              x2="0.505026"
              y2="0.494976"
              stroke="#326BFF"
              strokeWidth="1.4"
            />
          </svg>
        </button>
        <span className="mb-6 text-xs text-darkBlueGray-300 font-medium uppercase tracking-wider">
          Discover
        </span>
        <ul className="mb-20">
          <li className="mb-2 md:mb-0">
            <Link href="/products" onClick={handleDrawerClose}>
              <a className="text-2xl md:text-9xl text-white hover:text-darkBlueGray-100 font-medium font-heading cursor-pointer">
                Products
              </a>
            </Link>
          </li>
          <li className="mb-2 md:mb-0">
            <a className="text-2xl md:text-9xl text-white hover:text-darkBlueGray-100 font-medium font-heading">
              About Us
            </a>
          </li>
          <li className="mb-2 md:mb-0">
            <a className="text-2xl md:text-9xl text-white hover:text-darkBlueGray-100 font-medium font-heading">
              Contact Us
            </a>
          </li>
        </ul><ul className="mb-12 flex-1">
          <li className="mb-5">
            <a className="text-xl text-blue-500 hover:text-blue-400 font-heading">
              Facebook
            </a>
          </li>
          <li className="mb-5">
            <a className="text-xl text-blue-500 hover:text-blue-400 font-heading">
              Instagram
            </a>
          </li>
          <li>
            <a className="text-xl text-blue-500 hover:text-blue-400 font-heading">
              Twitter
            </a>
          </li>
        </ul>
        <a className="block w-full py-4 px-10 text-lg text-white font-heading font-medium tracking-tighter text-center bg-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-blue-600 rounded-xl">
          Login
        </a>
      </nav>
    </div>
  );
};

export default MobileNav;
