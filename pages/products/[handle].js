import React, {useState} from 'react';
import Layout from '../../components/shared/Layout';
import Image from 'next/image';
import {callStorefront} from '../../lib/api';
import {SingleProduct} from '../../lib/queries';
import useStore from '../../lib/store';
import {v4 as uuidv4} from 'uuid';
import Dinero from 'dinero.js';
import {Disclosure} from '@headlessui/react';
import {serialize} from 'next-mdx-remote/serialize';
import {MDXRemote} from 'next-mdx-remote';

const Product = ({product, source}) => {
  const productHandle = product.handle;
  const productName = product.title;
  const image = product.images.edges[0].node;
  const price = product.priceRange.minVariantPrice.amount;
  const variant = product.variants.edges[0].node;
  const formattedPrice = Dinero ({
    amount: parseInt (price),
    precision: 0,
  }).toFormat ('$0,0.00');

  const {
    addToTempOrder,
    tempOrder,
    setInitialTempOrder,
    updateItem,
  } = useStore ();

  const [quantity, setQuantity] = useState (1);

  const handleChange = e => {
    setQuantity (e.target.value);
  };

  const addToCart = () => {
    /**
     * todo:
     * check to see item if item is in bag
     * if so, update qty
     * if not create new orderarray
     */

    addToTempOrder ({
      product_handle: productHandle,
      product_name: productName,
      price: price,
      quantity: quantity,
      product_img: image.url,
      variant_id: variant.id,
      id: uuidv4 (),
    });

    setQuantity (1);
  };

  // const clearOrder = () => {
  //   setInitialTempOrder ([]);
  // };

  // console.log (image.url);
  // console.log (productName);
  // console.log (price);

  // console.log (product);

  // console.log (tempOrder);

  return (
    <Layout>
      <section className="pt-12 pb-24 bg-blueGray-100 rounded-b-10xl overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4" />
            <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0 flex justify-center">
              <div className="flex -mx-4 flex-wrap items-center justify-between lg:justify-start lg:items-start xl:items-center">
                <div className="w-full px-10">
                  <Image
                    className="mb-5 object-cover"
                    src={image.url}
                    width={500}
                    height={500}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="max-w-md mb-6">

                <h2 className="mt-6 mb-4 text-5xl md:text-7xl lg:text-8xl font-heading font-medium">
                  {productName}
                </h2>
                <p className="flex items-center mb-6">

                  <span className="text-3xl text-blue-500 font-medium">
                    {formattedPrice}
                  </span>
                </p>
                <p className="text-lg text-gray-400">
                  {`The nulla commodo, commodo eros a lor, tristique lectus. Lorem sad ${productName}.`}
                </p>
              </div>
              <div className="mb-10">
                <h4 className="mb-3 font-heading font-medium">Qty:</h4>
                <input
                  className="w-24 px-3 py-2 text-center bg-white border-2 border-blue-500 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                  type="number"
                  placeholder="1"
                  onChange={handleChange}
                  value={quantity}
                />
              </div>
              <div className="flex flex-wrap -mx-2 mb-12">
                <div
                  className="w-full md:w-2/3 px-2 mb-2 md:mb-0 cursor-pointer"
                  onClick={() => addToCart ()}
                >
                  <a className="block py-4 px-2 leading-8 font-heading font-medium tracking-tighter text-xl text-white text-center bg-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-blue-600 rounded-xl">
                    Add to bag
                  </a>
                </div>
                <div className="w-full md:w-1/3 px-2">
                  <a className="flex w-full py-4 px-2 items-center justify-center leading-8 font-heading font-medium tracking-tighter text-xl text-center bg-white focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 hover:bg-opacity-60 rounded-xl">
                    <span className="mr-2">Wishlist</span>
                    <svg
                      width="23"
                      height="22"
                      viewBox="0 0 23 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.3235 20.1324L2.52488 10.8515C1.75232 10.0706 1.24237 9.06367 1.06728 7.97339C0.8922 6.88311 1.06086 5.76477 1.54936 4.7768V4.7768C1.91837 4.03089 2.45739 3.3843 3.12201 2.89033C3.78663 2.39635 4.55781 2.06911 5.37203 1.93558C6.18626 1.80205 7.0202 1.86605 7.80517 2.1223C8.59013 2.37855 9.30364 2.81972 9.88691 3.40946L11.3235 4.86204L12.7601 3.40946C13.3434 2.81972 14.0569 2.37855 14.8419 2.1223C15.6269 1.86605 16.4608 1.80205 17.275 1.93558C18.0892 2.06911 18.8604 2.39635 19.525 2.89033C20.1897 3.3843 20.7287 4.03089 21.0977 4.7768V4.7768C21.5862 5.76477 21.7549 6.88311 21.5798 7.97339C21.4047 9.06367 20.8947 10.0706 20.1222 10.8515L11.3235 20.1324Z"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div>
                <h4 className="mb-6 font-heading font-medium">
                  More information
                </h4>
                <Disclosure>
                  <Disclosure.Button className="flex w-full pl-6 lg:pl-12 pr-6 py-4 mb-4 justify-between items-center leading-7 rounded-2xl border-2 border-blueGray-200 hover:border-blueGray-300">
                    <h3 className="text-lg font-heading font-medium">
                      Product details
                    </h3>
                    <span>
                      <svg
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.4594 0.289848C10.8128 -0.096616 11.3841 -0.096616 11.7349 0.289848C12.0871 0.676312 12.0897 1.30071 11.7349 1.68718L6.63794 7.21015C6.28579 7.59662 5.71584 7.59662 5.36108 7.21015L0.264109 1.68718C-0.0880363 1.30215 -0.0880363 0.676312 0.264109 0.289848C0.617558 -0.096616 1.18882 -0.096616 1.53966 0.289848L6.00147 4.81927L10.4594 0.289848Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-gray-500">
                    <div className="pl-6 lg:pl-12 xl:pl-12 pr-[2rem] pb-[1rem] prose">
                      <MDXRemote {...source} />
                    </div>

                  </Disclosure.Panel>
                </Disclosure>
                <Disclosure>
                  <Disclosure.Button className="flex w-full pl-6 lg:pl-12 pr-6 py-4 justify-between items-center leading-7 rounded-2xl border-2 border-blueGray-200 hover:border-blueGray-300">
                    <h3 className="text-lg font-heading font-medium">
                      Shipping &amp; returns
                    </h3>
                    <span>
                      <svg
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.4594 0.289848C10.8128 -0.096616 11.3841 -0.096616 11.7349 0.289848C12.0871 0.676312 12.0897 1.30071 11.7349 1.68718L6.63794 7.21015C6.28579 7.59662 5.71584 7.59662 5.36108 7.21015L0.264109 1.68718C-0.0880363 1.30215 -0.0880363 0.676312 0.264109 0.289848C0.617558 -0.096616 1.18882 -0.096616 1.53966 0.289848L6.00147 4.81927L10.4594 0.289848Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-gray-500">
                    <p className="pl-6 lg:pl-12 xl:pl-12 pr-[2rem] py-[1rem]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tempore sequi recusandae praesentium illum fugiat maxime, iure sint, in, sunt asperiores omnis maiores aperiam odit corporis provident doloribus veritatis magni!
                    </p>
                    <p className="pl-6 lg:pl-12 xl:pl-12 pr-[2rem] py-[1rem]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tempore sequi recusandae praesentium illum fugiat maxime, iure sint, in, sunt asperiores omnis maiores aperiam odit corporis provident doloribus veritatis magni!
                    </p>
                    <p className="pl-6 lg:pl-12 xl:pl-12 pr-[2rem] py-[1rem]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tempore sequi recusandae praesentium illum fugiat maxime, iure sint, in, sunt asperiores omnis maiores aperiam odit corporis provident doloribus veritatis magni!
                    </p>
                    <p className="pl-6 lg:pl-12 xl:pl-12 pr-[2rem] py-[1rem]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tempore sequi recusandae praesentium illum fugiat maxime, iure sint, in, sunt asperiores omnis maiores aperiam odit corporis provident doloribus veritatis magni!
                    </p>
                  </Disclosure.Panel>
                </Disclosure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export async function getStaticPaths () {
  const {data} = await callStorefront (`
    {
      products(first: 6) {
        edges {
          node {
            handle
          }
        }
      }
    }
  `);

  return {
    paths: data.products.edges.map (product => ({
      params: {handle: product.node.handle},
    })), //maps out each product statically to a route
    fallback: false,
  };
}

export async function getStaticProps({params}) {
  const {data} = await callStorefront (SingleProduct, {handle: params.handle});
  //processing markdown from shopify
  const source = data.product.descriptionHtml;
  const mdxSource = await serialize (source);
  return {
    props: {
      product: data.product,
      source: mdxSource, //converted markdown from shopify
    },
  };
}

export default Product;
