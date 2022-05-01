import React, {useState} from 'react';
import CartItem from '../components/cart/CartItem';
import Layout from '../components/shared/Layout';
import useStore from '../lib/store';
import Dinero from 'dinero.js';
import Link from 'next/link';
import {calcTotal, shippingCost} from '../lib/helpers';
import {CheckoutMutation} from '../lib/queries';
import {callStorefront} from '../lib/api';

const Cart = () => {
  const {tempOrder} = useStore ();
  // console.log (sumOrders (tempOrder));
  console.log (tempOrder);
  // const formattedShipping = Dinero ({
  //   amount: shippingCost,
  //   precision: 0,
  // }).toFormat ('$0,0.00');

  const [isLoading, setIsLoading] = useState (false);

  const total = calcTotal (tempOrder, shippingCost);

  const checkout = async () => {
    const mappedOrders = {
      lineItems: tempOrder.map (order => ({
        variantId: order.variant_id,
        quantity: parseInt (order.quantity),
      })),
    };
    // const mappedOrders =
    setIsLoading (true);
    const {data} = await callStorefront (CheckoutMutation, {
      input: mappedOrders,
    });

    const {webUrl} = data.checkoutCreate.checkout;

    window.location.href = webUrl;

    // if (data) {
    //   console.log (data);
    // }
  };

  return (
    <Layout>
      <section className="pt-12 pb-24 bg-blueGray-100">
        <div className="container px-4 mx-auto">
          <div className="pb-9 mb-7 text-center border-b border-black border-opacity-5">
            <h2 className="text-9xl xl:text-10xl leading-normal font-heading font-medium text-center">
              Your cart
            </h2>
          </div>
          <div className="py-12 px-8 md:px-12 mb-14 xl:mb-9 bg-white rounded-3xl">
            <span className="inline-block mb-16 text-darkBlueGray-300 font-medium">
              {tempOrder.length + ' ' + 'products' ||
                'There are no items in your cart.'}
            </span>
            <div className="lg:px-10">
              {' '}{/**cartitems container */}
              {tempOrder.map (order => (
                <CartItem key={order.id} order={order} />
              ))}
              {/**cartitem */}
            </div>
          </div>
          <div className="lg:flex xl:items-center">
            <div className="mb-10 xl:mb-0 lg:w-2/12 xl:w-1/12">
              <h3 className="text-xl font-heading font-medium">Cart total</h3>
            </div>
            <div className="sm:flex sm:flex-wrap lg:justify-end lg:w-10/12 xl:w-11/12">
              <div className="sm:pr-3 lg:px-3 mb-6 xl:mb-0 w-full sm:w-1/2 lg:w-4/12 xl:w-3/12">
                <div className="relative flex items-center justify-between py-4 px-10 leading-8 bg-white bg-opacity-50 font-medium rounded-3xl">
                  <div className="absolute left-3 flex justify-center items-center w-20 h-20 bg-white rounded-full">
                    <div className="flex justify-center items-center w-11 h-11 text-xl text-white font-bold bg-blue-500 rounded-full">
                      {tempOrder.length || 0}
                    </div>
                  </div>
                  <span className="ml-16">Products</span>
                </div>
              </div>
              {/* <div className="sm:pl-3 lg:px-3 mb-3 xl:mb-0 w-full sm:w-1/2 lg:w-4/12 xl:w-3/12">
                <div className="flex items-center justify-between py-4 px-10 leading-8 bg-white bg-opacity-50 font-heading font-medium rounded-3xl">
                  <span>Shipping</span>
                  <span className="flex items-center">

                    <span className="text-xl">{formattedShipping}</span>
                  </span>
                </div>
              </div> */}
              <div className="sm:pr-3 lg:px-3 mb-10 sm:mb-0 w-full sm:w-1/2 lg:w-4/12 xl:w-3/12">
                <div className="flex items-center justify-between py-4 px-10 leading-8 bg-white font-heading font-medium rounded-3xl">
                  <span>Total</span>
                  <span className="flex items-center text-blue-500">

                    <span className="text-xl">{total}</span>
                  </span>
                </div>
              </div>
              <div
                className={`sm:pl-3 w-full sm:w-1/2 lg:max-w-max lg:ml-auto xl:ml-0 ${tempOrder.length > 0 ? `cursor-pointer` : `pointer-events-none brightness-75`}`}
                onClick={() => checkout ()}
              >

                <a className="block py-5 px-10 w-full text-xl leading-6 font-medium tracking-tighter font-heading text-center text-white bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl">
                  {isLoading
                    ? <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                    : 'Checkout'}

                </a>

              </div>
              {/* {isLoading &&} */}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cart;
