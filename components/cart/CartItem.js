import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Dinero from 'dinero.js';
import useStore from '../../lib/store';

const CartItem = ({order}) => {
  const {removeItem} = useStore ();
  const image = order.product_img;
  const raw = parseInt (order.price);
  const price = Dinero ({amount: raw, precision: 0}).toFormat ('$0,0.00');

  const handleRemove = () => {
    removeItem (order.id);
  };

  return (
    <div className="relative flex flex-wrap items-center -mx-4 mb-8 pb-8 border-b border-gray-200 border-opacity-40">
      {' '}{/**cartItem */}
      <div className="relative xs:w-[60vw] md:w-[20vw] px-4 md:pr-10 mb-6 md:mb-0 h-[20vh]">
        <a className="">
          <Image
            className="w-24 object-cover"
            src={image}
            layout="fill"
            alt=""
          />
        </a>
      </div>
      <div className="w-full md:w-auto px-4 mb-6 lg:mb-0">
        <Link href={`/products/${order.product_handle}`}>
          <a className="block mb-5 text-xl font-heading font-medium hover:underline">
            {order.product_name}
          </a>
        </Link>

      </div>
      <div className="w-full md:w-1/2 lg:w-auto px-4 ml-auto">
        <div className="inline-flex w-full md:w-auto mb-4 md:mb-0 md:mr-10 items-center">
          <h4 className="mr-4 font-heading font-medium">Qty:</h4>
          <input
            className="w-16 px-3 py-2 text-center placeholder-gray-400 text-gray-400 bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
            type="text"
            placeholder={order.quantity}
          />
        </div>
        <span className="text-xl font-heading font-medium text-blue-500">

          <span>{price}</span>
        </span>
      </div>
      <button
        className="absolute top-0 right-0 lg:mt-2 lg:-mr-4 text-gray-200 hover:text-gray-300"
        onClick={() => handleRemove ()}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="27"
            height="27"
            rx="13.5"
            stroke="currentColor"
          />
          <line
            x1="20.495"
            y1="8.49497"
            x2="8.49498"
            y2="20.495"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <line
            x1="19.505"
            y1="20.495"
            x2="7.50503"
            y2="8.49498"
            stroke="currentColor"
            strokeWidth="1.4"
          />
        </svg>
      </button>
    </div>
  );
};

export default CartItem;
