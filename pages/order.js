import React from 'react';
import Layout from '../components/shared/Layout';

const Order = () => {
  return (
    <Layout>

      <section>
        <div className="py-24 bg-blueGray-100">
          <div className="container px-4 mx-auto">
            <ul className="flex flex-wrap items-center mb-10 xl:mb-0">
              <li className="mr-6">
                <a className="flex items-center text-sm font-medium text-gray-400 hover:text-gray-500">
                  <span>Home</span>
                  <svg
                    className="ml-6"
                    width="4"
                    height="7"
                    viewbox="0 0 4 7"
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
                    viewbox="0 0 4 7"
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
            <div className="pb-9 mb-10 lg:mb-11 text-center border-b border-black border-opacity-5">
              <h2 className="text-9xl xl:text-10xl leading-normal font-heading font-medium text-center">
                Your order
              </h2>
            </div>
            <div className="flex flex-wrap pb-3 lg:pb-11">
              <div className="lg:flex w-full lg:w-7/12 mb-14 lg:mb-0">
                <div className="flex justify-center sm:justify-start items-center mb-3 lg:mb-0">
                  <h3 className="mr-3 lg:mr-7 text-lg xl:text-xl font-heading font-medium">
                    Status:
                  </h3>

                </div>
                <h3 className="text-lg xl:text-xl font-heading font-medium text-center sm:text-left">
                  Payment completed successfully!
                </h3>
              </div>
              <div className="w-full lg:w-5/12">
                <h3 className="text-lg xl:text-xl font-heading font-medium text-right">
                  Order number: 4332049123
                </h3>
              </div>
            </div>
            <div className="p-8 xl:py-14 xl:px-16 mb-14 xl:mb-16 bg-white rounded-3xl">
              <p className="mb-11 xl:mb-16 text-gray-400 font-medium">
                3 products
              </p>
              <div className="lg:flex lg:items-center lg:justify-between pb-7 xl:pb-9 mb-7 xl:mb-9 border-b border-black border-opacity-5">
                <div className="w-full lg:w-7/12">
                  <div className="sm:flex sm:items-center mb-6 lg:mb-0">
                    <a />
                    <div>
                      <a className="inline-block mb-4 text-lg font-heading font-medium hover:underline">
                        Apple iPhone 12 Pro (128GB)
                      </a>
                      <div className="flex flex-wrap">
                        <p className="mr-4 text-sm font-heading font-medium">
                          <span>Color:</span>
                          <span className="ml-2 text-gray-400 font-body">
                            Silver
                          </span>
                        </p>
                        <p className="text-sm font-heading font-medium">
                          <span>Memory storage:</span>
                          <span className="ml-2 text-gray-400 font-body">
                            128GB
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-4/12 xl:w-3/12 2xl:w-2/12">
                  <div className="relative xl:right-20 flex justify-between flex-wrap sm:px-7 lg:pl-0">
                    <p className="flex items-center text-sm">
                      <span className="mr-3 font-heading font-medium">
                        Qty:
                      </span>
                      <span className="text-lg text-gray-400 font-body">1</span>
                    </p>
                    <p className="flex items-center text-sm text-blue-500 font-heading font-medium">
                      <span className="mr-2">$</span>
                      <span className="text-lg xl:text-xl">544.90</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:flex lg:items-center lg:justify-between pb-7 xl:pb-9 mb-7 xl:mb-9 border-b border-black border-opacity-5">
                <div className="w-full lg:w-7/12">
                  <div className="sm:flex sm:items-center mb-6 lg:mb-0">

                    <div>
                      <a className="inline-block mb-4 text-lg font-heading font-medium hover:underline">
                        Headphones SONY 1l X-O
                      </a>
                      <div className="flex flex-wrap">
                        <p className="mr-4 text-sm font-heading font-medium">
                          <span>Color:</span>
                          <span className="ml-2 text-gray-400 font-body">
                            Grey
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-4/12 xl:w-3/12 2xl:w-2/12">
                  <div className="relative xl:right-20 flex justify-between flex-wrap sm:px-7 lg:pl-0">
                    <p className="flex items-center text-sm">
                      <span className="mr-3 font-heading font-medium">
                        Qty:
                      </span>
                      <span className="text-lg text-gray-400 font-body">1</span>
                    </p>
                    <p className="flex items-center text-sm text-blue-500 font-heading font-medium">
                      <span className="mr-2">$</span>
                      <span className="text-lg xl:text-xl">44.90</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:flex lg:items-center lg:justify-between">
                <div className="w-full lg:w-7/12">
                  <div className="sm:flex sm:items-center mb-6 lg:mb-0">
                    <a />
                    <div>
                      <a className="inline-block mb-4 text-lg font-heading font-medium hover:underline">
                        Smartwatch Homme Watch 19
                      </a>
                      <div className="flex flex-wrap">
                        <p className="mr-4 text-sm font-heading font-medium">
                          <span>Color:</span>
                          <span className="ml-2 text-gray-400 font-body">
                            Silver
                          </span>
                        </p>
                        <p className="text-sm font-heading font-medium">
                          <span>Size:</span>
                          <span className="ml-2 text-gray-400 font-body">
                            M
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-4/12 xl:w-3/12 2xl:w-2/12">
                  <div className="relative xl:right-20 flex justify-between flex-wrap sm:px-7 lg:pl-0">
                    <p className="flex items-center text-sm">
                      <span className="mr-3 font-heading font-medium">
                        Qty:
                      </span>
                      <span className="text-lg text-gray-400 font-body">1</span>
                    </p>
                    <p className="flex items-center text-sm text-blue-500 font-heading font-medium">
                      <span className="mr-2">$</span>
                      <span className="text-lg xl:text-xl">120.90</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:flex xl:items-center w-full">
              <div className="lg:w-2/12 xl:w-1/12 mb-10 xl:mb-0">
                <h3 className="text-xl font-heading font-medium">Summary</h3>
              </div>
              <div className="w-full lg:w-10/12 xl:w-11/12">
                <div className="flex flex-wrap lg:justify-end -mx-3">
                  <div className="w-full sm:w-1/2 lg:w-4/12 xl:w-3/12 px-3 mb-6 xl:mb-0">
                    <div className="relative flex items-center justify-between py-4 px-10 leading-8 bg-white bg-opacity-50 font-medium rounded-3xl">
                      <div className="absolute left-3 flex justify-center items-center w-20 h-20 bg-white rounded-full">
                        <div className="flex justify-center items-center w-11 h-11 text-xl text-white font-bold bg-blue-500 rounded-full">
                          3
                        </div>
                      </div>
                      <span className="ml-16">Products</span>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 lg:w-4/12 xl:w-3/12 px-3 mb-3 xl:mb-0">
                    <div className="flex items-center justify-between py-4 px-10 leading-8 bg-white bg-opacity-50 font-heading font-medium rounded-3xl">
                      <span>Shipping</span>
                      <span className="flex items-center">
                        <span className="mr-3 text-sm">$</span>
                        <span className="text-xl">10,00</span>
                      </span>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 lg:w-4/12 xl:w-3/12 px-3 mb-10 sm:mb-0">
                    <div className="flex items-center justify-between py-4 px-10 leading-8 bg-white font-heading font-medium rounded-3xl">
                      <span>Total</span>
                      <span className="flex items-center text-blue-500">
                        <span className="mr-3 text-sm">$</span>
                        <span className="text-xl">720,70</span>
                      </span>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 lg:max-w-max lg:ml-auto xl:ml-0 px-3">
                    <a className="block py-5 px-10 w-full text-xl leading-6 font-medium tracking-tighter font-heading text-center text-white bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl">
                      Invoice
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Order;
