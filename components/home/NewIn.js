import Image from 'next/image';
import React from 'react';
import womanListening
  from '../../assets/images/ecommerce-newest-products/woman-listening3.jpg';
import Link from 'next/link';

const Item = ({imgSrc, name, price, handle}) => {
  return (
    <div className="flex-shrink-0 w-full lg:w-1/2 p-3 pr-10 sm:pr-4 xl:pr-3">
      <div className="relative p-10 xl:py-20 mb-5 xl:mb-8 rounded-3xl h-[45vh]">
        <a className="flex items-center">
          <Image
            className="mx-auto object-cover"
            layout="fill"
            src={imgSrc}
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
      <p className="flex items-center text-xl text-blue-500 font-heading font-medium tracking-tighter">
        <span className="mr-2 text-xs">$</span>
        <span>{price}</span>
      </p>
    </div>
  );
};

const NewIn = ({products}) => {
  return (
    <div className="flex items-center flex-wrap">
      <div className="w-full sm:pr-4 xl:pr-20 sm:w-1/2 xl:w-5/12">
        <div className="relative mb-14 sm:mb-0">
          <Image className="relative pl-8" src={womanListening} alt="" />
        </div>
      </div>
      <div className="w-full sm:w-1/2 py-24 2xl:py-0">
        <div className="relative container px-4 mx-auto z-10">
          <h2 className="mb-5 xl:mb-24 text-9xl xl:text-10xl font-heading font-medium">
            New in
          </h2>
          <div className="relative flex -mx-3 mb-5 sm:mb-0">
            {products.edges.map (item => {
              const product = item.node;
              const image = product.images.edges[0].node;
              const price = product.priceRange.minVariantPrice.amount;

              return (
                <Item
                  key={product.handle}
                  handle={product.handle}
                  imgSrc={image.url}
                  name={product.title}
                  price={price}
                />
              );
            })}

            {/* <Item
              imgSrc={headphonesSony}
              name={'Headphones SONY 1l X-O'}
              price="44.90"
            />
            <Item
              imgSrc={smartwatchGreen}
              name={'Smartwatch Homme Watch 19'}
              price="120.90"
            />

            <Item
              imgSrc={macbookPro17}
              name={'MacBook Pro 17’’'}
              price={'2090.59'}
            /> */}

            {/* <div className="xl:ml-20 flex-shrink-0 w-full lg:w-1/2 p-3">
              <div className="p-10 xl:py-20 mb-5 xl:mb-8 bg-white rounded-3xl">
                <a className="flex items-center">
                  <Image
                    className="mx-auto h-56 object-cover"
                    src={macbookPro17}
                    alt=""
                  />
                </a>
              </div>
              <a>
                <p className="mb-4 text-xl leading-8 font-heading font-medium hover:underline">
                  MacBook Pro 17’’
                </p>
              </a>
              <p className="flex items-center text-xl text-blue-500 font-heading font-medium tracking-tighter">
                <span className="mr-2 text-xs">$</span>
                <span>2090.59</span>
              </p>
            </div> */}
            <div className="absolute right-0 bottom-1/2 transform xl:translate-x-1/2 -translate-y-1/2">
              <a className="w-18 h-14 flex justify-center items-center text-white bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl">
                <svg
                  className="my-px"
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.289849 1.54064C-0.0966146 1.18719 -0.0966145 0.615928 0.28985 0.265087C0.676314 -0.087058 1.30071 -0.0896662 1.68718 0.265087L7.21015 5.36206C7.59662 5.71421 7.59662 6.28416 7.21015 6.63892L1.68718 11.7359C1.30215 12.088 0.676312 12.088 0.289848 11.7359C-0.0966159 11.3824 -0.0966159 10.8112 0.289848 10.4603L4.81927 5.99853L0.289849 1.54064Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewIn;
