import Dinero from 'dinero.js';

export const shippingCost = 10;

export const sumOrders = arr => {
  const arrMap = arr.map (
    item => parseInt (item.price) * parseInt (item.quantity)
  );

  const sumArr = arrMap.reduce ((a, b) => a + b, 0);
  const price = Dinero ({amount: sumArr, precision: 0}).toFormat ('$0,0.00');
  return price;
  //loop for each array, multiply price x qty
  //sum up all
  //return total
};

export const calcShipping = () => {
  return Dinero ({amount: 10, precision: 0}).toFormat ('$0,0.00');
};

export const calcTotal = arr => {
  const sum = arr
    .map (item => parseInt (item.price) * parseInt (item.quantity))
    .reduce ((a, b) => a + b, 0);
  const total = Dinero ({amount: sum, precision: 0}).toFormat ('$0,0.00');
  return total;
};

export const formatPrice = price => {
  return Dinero ({amount: parseInt (price), precision: 0}).toFormat ('$0,0.00');
};
