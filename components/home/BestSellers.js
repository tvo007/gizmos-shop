import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useStore from '../../lib/store';
import {v4 as uuidv4} from 'uuid';
import {formatPrice} from '../../lib/helpers';

const Item = ({name, imgSrc, price, handle, variantId}) => {
  const {addToTempOrder} = useStore ();

  const addToCart = () => {
    addToTempOrder ({
      product_handle: handle,
      product_name: name,
      price: price,
      quantity: '1',
      product_img: imgSrc,
      variant_id: variantId,
      id: uuidv4 (),
    });
  };

  return (
    <div className="xl:block p-3 xl:flex-1 
      lg:flex lg:flex-col 
      lg:w-full md:flex md:flex-col md:w-full 
      sm:flex sm:flex-col sm:w-full 
      xs:flex xs:flex-col xs:w-full 
    ">
      <div className="relative p-10 xl:px-12 xl:pt-32 xl:pb-16 bg-white rounded-3xl h-[40vh]">
        <a>
          <Image
            className="mb-8 xl:mb-20 mx-auto h-40 object-cover"
            src={imgSrc}
            layout="fill"
            alt=""
          />
        </a>
      </div>
      <Link href={`/products/${handle}`}>
        <a>
          <p className="mb-4 text-xl leading-8 font-heading font-medium hover:underline">
            {name}
          </p>
        </a>
      </Link>
      <p className="flex items-center mb-6 xl:mb-10 text-xl text-blue-500 font-heading font-medium tracking-tighter">

        <span>{formatPrice (price)}</span>
      </p>
      <div className="sm:max-w-max cursor-pointer" onClick={() => addToCart ()}>
        <a className="block py-4 px-10 w-full text-lg leading-5 text-white font-medium tracking-tighter font-heading text-center bg-purple-500 hover:bg-purple-600 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 rounded-xl">
          Add to cart
        </a>
      </div>
    </div>
  );
};

const BestSellers = ({products}) => {
  return (
    <div className="container px-4 mx-auto">
      <h2 className="mb-14 xl:mb-24 text-9xl xl:text-10xl font-heading font-medium">
        Best sellers
      </h2>
      <div className="flex items-center">
        <a className="hidden md:block pr-6 hover:text-darkBlueGray-400">
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.21015 10.4594C7.59661 10.8128 7.59661 11.3841 7.21015 11.7349C6.82369 12.0871 6.19929 12.0897 5.81282 11.7349L0.289847 6.63794C-0.0966174 6.28579 -0.0966173 5.71584 0.289847 5.36108L5.81282 0.264109C6.19785 -0.0880364 6.82369 -0.0880364 7.21015 0.264109C7.59662 0.617558 7.59662 1.18882 7.21015 1.53966L2.68073 6.00147L7.21015 10.4594Z"
              fill="currentColor"
            />
          </svg>
        </a>
        <div className="flex flex-wrap items-start -mx-3 lg:-mx-0 lg:w-full">
          {products.edges.map (item => {
            const product = item.node;
            const image = product.images.edges[0].node;
            const price = product.priceRange.minVariantPrice.amount;
            const variant = product.variants.edges[0].node;
            return (
              <Item
                key={product.handle}
                handle={product.handle}
                imgSrc={image.url}
                name={product.title}
                price={price}
                variantId={variant.id}
              />
            );
          })}

          {/* <div className="p-3 w-full sm:w-1/2 xl:w-5/12">
            <div className="p-10 xl:px-12 xl:pt-24 xl:pb-20 h-full bg-white rounded-3xl">
              <a className="block mx-auto mb-8 xl:mb-20 max-w-max">
                <Image
                  className="h-40 lg:h-72 object-cover"
                  src={iphone12}
                  alt=""
                />
              </a>
              <a>
                <p className="mb-4 text-xl leading-8 font-heading font-medium hover:underline">
                  Apple iPhone 12 Pro (128GB) Silver
                </p>
              </a>
              <p className="flex items-center mb-5 text-xl text-blue-500 font-heading font-medium tracking-tighter">
                <span className="mr-2 text-xs">$</span>
                <span>544.90</span>
              </p>
              <p className="mb-10 text-darkBlueGray-400 font-heading">
                I haretra neque non me, finibus hart bibendum molestie.
              </p>
              <div className="sm:max-w-max">
                <a className="block py-4 px-10 w-full text-lg leading-5 text-white font-medium tracking-tighter font-heading text-center bg-purple-500 hover:bg-purple-600 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 rounded-xl">
                  Add to cart
                </a>
              </div>
            </div>
          </div>
          <div className="p-3 w-full sm:w-1/2 xl:flex-1">
            <div className="p-10 xl:px-12 xl:pt-32 xl:pb-16 h-full bg-white rounded-3xl">
              <a className="block mx-auto mb-8 xl:mb-20 max-w-max">
                <Image
                  className="h-40 object-cover"
                  src={macbookPro17}
                  alt=""
                />
              </a>
              <a>
                <p className="mb-4 text-xl leading-8 font-heading font-medium hover:underline">
                  MacBook Pro 17’’
                </p>
              </a>
              <p className="flex items-center mb-6 xl:mb-10 text-xl text-blue-500 font-heading font-medium tracking-tighter">
                <span className="mr-2 text-xs">$</span>
                <span>2090.59</span>
              </p>
              <div className="sm:max-w-max">
                <a className="block py-4 px-10 w-full text-lg leading-5 text-white font-medium tracking-tighter font-heading text-center bg-purple-500 hover:bg-purple-600 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 rounded-xl">
                  Add to cart
                </a>
              </div>
            </div>
          </div>
          <div className="hidden xl:block p-3 xl:flex-1">
            <div className="p-10 xl:px-12 xl:pt-32 xl:pb-16 h-full bg-white rounded-3xl">
              <a>
                <Image
                  className="mb-8 xl:mb-20 mx-auto h-40"
                  src={smartwatchGreen}
                  alt=""
                />
              </a>
              <a>
                <p className="mb-4 text-xl leading-8 font-heading font-medium hover:underline">
                  Smartwatch 19
                </p>
              </a>
              <p className="flex items-center mb-6 xl:mb-10 text-xl text-blue-500 font-heading font-medium tracking-tighter">
                <span className="mr-2 text-xs">$</span>
                <span>120.90</span>
              </p>
              <div className="sm:max-w-max">
                <a className="block py-4 px-10 w-full text-lg leading-5 text-white font-medium tracking-tighter font-heading text-center bg-purple-500 hover:bg-purple-600 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 rounded-xl">
                  Add to cart
                </a>
              </div>
            </div>
          </div> */}

        </div>
        <a className="hidden md:block pl-6 hover:text-darkBlueGray-400">
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.289849 1.54064C-0.0966146 1.18719 -0.0966145 0.615928 0.28985 0.265087C0.676314 -0.087058 1.30071 -0.0896664 1.68718 0.265087L7.21015 5.36206C7.59662 5.71421 7.59662 6.28416 7.21015 6.63892L1.68718 11.7359C1.30215 12.088 0.676312 12.088 0.289848 11.7359C-0.0966159 11.3824 -0.0966159 10.8112 0.289848 10.4603L4.81927 5.99853L0.289849 1.54064Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
      <div className="md:hidden flex justify-center mt-12">
        <a className="mx-14 hover:text-darkBlueGray-400">
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.21015 10.4594C7.59661 10.8128 7.59661 11.3841 7.21015 11.7349C6.82369 12.0871 6.19929 12.0897 5.81282 11.7349L0.289847 6.63794C-0.0966174 6.28579 -0.0966173 5.71584 0.289847 5.36108L5.81282 0.264109C6.19785 -0.0880364 6.82369 -0.0880364 7.21015 0.264109C7.59662 0.617558 7.59662 1.18882 7.21015 1.53966L2.68073 6.00147L7.21015 10.4594Z"
              fill="currentColor"
            />
          </svg>
        </a>
        <a className="mx-14 hover:text-darkBlueGray-400">
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.289849 1.54064C-0.0966146 1.18719 -0.0966145 0.615928 0.28985 0.265087C0.676314 -0.087058 1.30071 -0.0896664 1.68718 0.265087L7.21015 5.36206C7.59662 5.71421 7.59662 6.28416 7.21015 6.63892L1.68718 11.7359C1.30215 12.088 0.676312 12.088 0.289848 11.7359C-0.0966159 11.3824 -0.0966159 10.8112 0.289848 10.4603L4.81927 5.99853L0.289849 1.54064Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default BestSellers;
