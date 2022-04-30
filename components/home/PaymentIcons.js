import React from 'react';
import Image from 'next/image';
import mastercard from '../../assets/brands/mastercard.svg';

import paypal from '../../assets/brands/paypal.svg';

import visa from '../../assets/brands/visa.svg';

import amex from '../../assets/brands/american-express.svg';

const PaymentIcons = () => {
  return (
    <div className="border-t border-gray-100 py-9 bg-blueGray-100">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap justify-center">
          <Image className="mr-1" src={mastercard} alt="" />
          <Image className="mr-1" src={paypal} alt="" />
          <Image className="mr-1" src={visa} alt="" />
          <Image src={amex} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PaymentIcons;