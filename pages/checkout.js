import React, {useState} from 'react';
import Layout from '../components/shared/Layout';
import {sumOrders, calcTotal, shippingCost} from '../lib/helpers';
import useStore from '../lib/store';
import Dinero from 'dinero.js';
/**
 * use for cc testing:
 * 1 - To Simulate an Approved Transaction
2 - To Simulate a Declined Transaction
3 - To Simulate a Gateway Failure
 */

/**
 * flow:
 * @
 */

const initialState = {
  name: 'Tim Vo',
  address1: '1234 Fake Street',
  address2: 'Ste 10',
  city: 'Newport Beach',
  state: 'CA',
  zipCode: '92606',
  country: 'United States of America',
  nameOnCard: 'Tim Vo',
  creditCard: '1',
  expDate: '6/2025',
  cvv: '385',
};

const Checkout = () => {
  const {tempOrder} = useStore ();

  const subtotal = sumOrders (tempOrder);

  const formattedShipping = Dinero ({
    amount: shippingCost,
    precision: 0,
  }).toFormat ('$0,0.00');

  const total = calcTotal (tempOrder, shippingCost);

  const [formData, setFormData] = useState (initialState);

  const handleChange = e => {
    setFormData ({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = e => {
    e.preventDefault ();
    console.log ({
      formData: formData,
      orderData: tempOrder,
      subtotal: subtotal,
      shipping: formattedShipping,
      total: total,
    });
  };
  return (
    <Layout>
      <section className="pt-12 pb-24 bg-blueGray-100 overflow-hidden">
        <div className="container px-4 mx-auto">
          <ul className="flex flex-wrap items-center mb-10 xl:mb-0">
            <li className="mr-6">
              <a className="flex items-center text-sm font-medium text-gray-400 hover:text-gray-500">
                <span>Home</span>
                <svg
                  className="ml-6"
                  width="4"
                  height="7"
                  viewBox="0 0 4 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </li>
            <li className="mr-6">
              <a className="flex items-center text-sm font-medium text-gray-400 hover:text-gray-500">
                <span>Store</span>
                <svg
                  className="ml-6"
                  width="4"
                  height="7"
                  viewBox="0 0 4 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600">
                Your cart
              </a>
            </li>
          </ul>
          <div className="pb-9 mb-7 text-center border-b border-black border-opacity-5">
            <h2 className="text-9xl xl:text-10xl leading-normal font-heading font-medium text-center">
              Billing address
            </h2>
          </div>
          <form onSubmit={handleSubmit}>

            <div className="flex flex-wrap -mx-4 mb-14 xl:mb-24">
              <div className="w-full md:w-8/12 lg:w-3/4 px-4 mb-14 md:mb-0">
                <div className="py-20 px-8 md:px-16 bg-blueGray-100 rounded-3xl">
                  <div className="pb-16 mb-14 border-b border-gray-200 border-opacity-30">
                    <div className="max-w-lg mx-auto">
                      <div className="flex flex-wrap mb-6 items-center">
                        <div className="w-full md:w-1/3 mb-2 md:mb-0 md:pr-10 md:text-right">
                          <label className="text-lg text-darkBlueGray-400">
                            Your name:
                          </label>
                        </div>
                        <div className="w-full md:w-2/3">
                          <input
                            className="w-full px-5 py-3 text-lg leading-9 bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="flex flex-wrap mb-6 items-center">
                        <div className="w-full md:w-1/3 mb-2 md:mb-0 md:pr-10 md:text-right">
                          <label className="text-lg text-darkBlueGray-400">
                            Address 1:
                          </label>
                        </div>
                        <div className="w-full md:w-2/3">
                          <input
                            className="w-full px-5 py-3 text-lg leading-9 bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                            type="text"
                            name="address1"
                            value={formData.address1}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center">
                        <div className="w-full md:w-1/3 mb-2 md:mb-0 md:pr-10 md:text-right">
                          <label className="text-lg text-darkBlueGray-400">
                            Address 2:
                          </label>
                        </div>
                        <div className="w-full md:w-2/3">
                          <input
                            className="w-full px-5 py-3 text-lg leading-9 bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                            type="text"
                            name="address2"
                            value={formData.address2}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pb-16 mb-14 border-b border-gray-200 border-opacity-30">
                    <div className="max-w-lg mx-auto mb-16">
                      <div className="flex flex-wrap mb-6 items-center">
                        <div className="w-full md:w-1/3 mb-2 md:mb-0 md:pr-10 md:text-right">
                          <label className="text-lg text-darkBlueGray-400">
                            City:
                          </label>
                        </div>
                        <div className="w-full md:w-2/3">
                          <input
                            className="w-full px-5 py-3 text-lg leading-9 bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="flex flex-wrap mb-6 items-center">
                        <div className="w-full md:w-1/3 mb-2 md:mb-0 md:pr-10 md:text-right">
                          <label className="text-lg text-darkBlueGray-400">
                            State:
                          </label>
                        </div>
                        <div className="w-full md:w-2/3">
                          <input
                            className="w-full px-5 py-3 text-lg leading-9 bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                            type="text"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="flex flex-wrap mb-6 items-center">
                        <div className="w-full md:w-1/3 mb-2 md:mb-0 md:pr-10 md:text-right">
                          <label className="text-lg text-darkBlueGray-400">
                            Zip code:
                          </label>
                        </div>
                        <div className="w-full md:w-1/3">
                          <input
                            className="w-full px-5 py-3 text-lg leading-9 bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                            type="text"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="flex flex-wrap mb-6 items-center">
                        <div className="w-full md:w-1/3 mb-2 md:mb-0 md:pr-10 md:text-right">
                          <label className="text-lg text-darkBlueGray-400">
                            Country:
                          </label>
                        </div>
                        <div className="w-full md:w-2/3">
                          <input
                            className="w-full px-5 py-3 text-lg leading-9 bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                    </div>
                    {/**user info options VV */}
                    {/* <div className="md:ml-16">
                      <label className="relative flex mb-8 items-center">
                        <input
                          className="relative ml-10 appearance-none"
                          type="checkbox"
                        />
                        <button className="absolute top-1/2 left-0 transform -translate-y-1/2 h-6 w-6">
                          <svg
                            width="27"
                            height="27"
                            viewBox="0 0 27 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="27"
                              height="27"
                              rx="8"
                              fill="#28E172"
                            />
                            <path
                              d="M11.4534 19L6 13.6758L6.72022 12.9726L11.4534 17.5937L21.2798 8L22 8.70316L11.4534 19Z"
                              fill="white"
                            />
                          </svg>
                        </button>
                        <span className="ml-2 text-sm text-gray-400">
                          Shipping address is the same as my billing address
                        </span>
                      </label>
                      <label className="relative flex items-center">
                        <input
                          className="relative ml-10 appearance-none"
                          type="checkbox"
                        />
                        <button className="absolute top-1/2 left-0 transform -translate-y-1/2 h-6 w-6">
                          <svg
                            width="27"
                            height="27"
                            viewBox="0 0 27 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.5"
                              y="0.5"
                              width="26"
                              height="26"
                              rx="7.5"
                              stroke="#348BF6"
                            />
                          </svg>
                        </button>
                        <span className="ml-2 text-sm text-gray-400">
                          Save this information for next time
                        </span>
                      </label>
                    </div> */}
                  </div>
                  <div className="mb-16 md:ml-16">
                    <label className="relative inline-flex mb-5 mr-16 items-center">
                      <input
                        className="relative ml-10 appearance-none"
                        type="checkbox"
                      />
                      <button className="absolute top-1/2 left-0 transform -translate-y-1/2 h-6 w-6">
                        <svg
                          width="27"
                          height="27"
                          viewBox="0 0 27 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="27" height="27" rx="8" fill="#28E172" />
                          <path
                            d="M11.4534 19L6 13.6758L6.72022 12.9726L11.4534 17.5937L21.2798 8L22 8.70316L11.4534 19Z"
                            fill="white"
                          />
                        </svg>
                      </button>
                      <span className="ml-2 text-sm text-gray-400 leading-3">
                        Credit card
                      </span>
                    </label>
                    <label className="relative inline-flex mb-5 mr-16 items-center">
                      <input
                        className="relative ml-10 appearance-none"
                        type="checkbox"
                      />
                      <button className="absolute top-1/2 left-0 transform -translate-y-1/2 h-6 w-6">
                        <svg
                          width="27"
                          height="27"
                          viewBox="0 0 27 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.5"
                            y="0.5"
                            width="26"
                            height="26"
                            rx="7.5"
                            stroke="#348BF6"
                          />
                        </svg>
                      </button>
                      <span className="ml-2 text-sm text-gray-400 leading-3">
                        Debit card
                      </span>
                    </label>
                    <label className="relative inline-flex mb-5 items-center">
                      <input
                        className="relative ml-10 appearance-none"
                        type="checkbox"
                      />
                      <button className="absolute top-1/2 left-0 transform -translate-y-1/2 h-6 w-6">
                        <svg
                          width="27"
                          height="27"
                          viewBox="0 0 27 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.5"
                            y="0.5"
                            width="26"
                            height="26"
                            rx="7.5"
                            stroke="#348BF6"
                          />
                        </svg>
                      </button>
                      <span className="ml-2 text-sm text-gray-400 leading-3">
                        PayPal
                      </span>
                    </label>
                  </div>
                  <div className="max-w-lg mx-auto">
                    <div className="flex flex-wrap mb-6 items-center">
                      <div className="w-full md:w-1/3 mb-2 md:mb-0 md:pr-10 md:text-right">
                        <label className="text-lg text-darkBlueGray-400">
                          Name on card: {/** Name on card */}
                        </label>
                      </div>
                      <div className="w-full md:w-2/3">
                        <input
                          className="w-full px-5 py-3 text-lg leading-9 bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                          type="text"
                          name="nameOnCard"
                          value={formData.nameOnCard}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap mb-6 items-center">
                      <div className="w-full md:w-1/3 mb-2 md:mb-0 md:pr-10 md:text-right">
                        <label className="text-lg text-darkBlueGray-400">
                          CC: {/**Credit card number */}
                        </label>
                      </div>
                      <div className="w-full md:w-2/3">
                        <input
                          className="w-full px-5 py-3 text-lg leading-9 bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                          type="text"
                          name="creditCard"
                          value={formData.creditCard}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap mb-6 items-center">
                      <div className="w-full md:w-1/3 mb-2 md:mb-0 md:pr-10 md:text-right">
                        <label className="text-lg text-darkBlueGray-400">
                          Exp: {/**Expiration */}
                        </label>
                      </div>
                      <div className="w-full md:w-2/3">
                        <input
                          className="w-full px-5 py-3 text-lg leading-9 bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                          type="text"
                          name="expDate"
                          value={formData.expDate}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center">
                      <div className="w-full md:w-1/3 mb-2 md:mb-0 md:pr-10 md:text-right">
                        <label className="text-lg text-darkBlueGray-400">
                          CVV: {/**CVV */}
                        </label>
                      </div>
                      <div className="w-full md:w-1/3">
                        <input
                          className="w-full px-5 py-3 text-lg leading-9 bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-4/12 lg:w-1/4 px-4">
                <div>
                  <h2 className="mb-7 lg:mt-6 text-3xl font-heading font-medium">
                    Order summary
                  </h2>
                  <div className="flex items-center justify-between py-4 px-10 mb-3 leading-8 bg-white bg-opacity-50 font-heading font-medium rounded-3xl">
                    <span>Subtotal</span>
                    <span className="flex items-center text-xl">

                      <span>{subtotal}</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-4 px-10 mb-3 leading-8 bg-white bg-opacity-50 font-heading font-medium rounded-3xl">
                    <span>Shipping</span>
                    <span className="flex items-center text-xl">
                      <span>{formattedShipping}</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-4 px-10 mb-14 leading-8 bg-white font-heading font-medium rounded-3xl">
                    <span>Total</span>
                    <span className="flex items-center text-xl text-blue-500">
                      <span className="mr-2 text-base">{total}</span>
                      <span />
                    </span>
                  </div>
                  <h4 className="mb-4 text-3xl font-heading font-medium">
                    Discount code
                  </h4>
                  <label className="block mb-3 text-lg text-darkBlueGray-400">
                    Apply code:
                  </label>
                  <div className="relative mb-3 lg:mb-10">
                    <input
                      className="flex-grow outline-none px-5 pr-36 py-4 w-full leading-7 bg-white border-2 border-blue-500 rounded-3xl"
                      type="text"
                    />
                    <a className="absolute top-1/2 transform -translate-y-1/2 right-1 -translate-x-px w-auto xl:w-auto py-3 px-8 text-lg leading-7 text-white font-medium tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl">
                      Apply
                    </a>
                  </div>

                  <button
                    className="inline-block w-full py-5 lg:py-3 px-10 text-lg leading-6 lg:leading-7 text-white font-medium tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl cursor-pointer"
                    type="submit"
                  >
                    Checkout
                  </button>

                </div>
              </div>
            </div>
          </form>
          <div className="md:w-96">
            <a className="block py-5 px-10 w-full text-xl leading-6 font-medium tracking-tighter font-heading text-center bg-white hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl">
              Back to shop
            </a>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Checkout;
