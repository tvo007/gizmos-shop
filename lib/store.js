/**
 * global store for cart
 */

import create from 'zustand';
const useStore = create (set => ({
  tempOrder: [],
  draftOrderId: '',
  addToTempOrder: items =>
    set (state => ({tempOrder: [...state.tempOrder, items]})),
  removeItem: id => {
    set (state => ({
      tempOrder: state.tempOrder.filter (item => item.id !== id),
    }));
  },
  // updateItem: (handle, quantity) => {
  //   set (
  //     state => ({
  //       tempOrder: state.tempOrder.map (function (item) {
  //         if (item.handle === handle) {
  //           return {...item, quantity: item.quantity + quantity};
  //         } else {
  //           return item;
  //         }
  //       }),
  //     }),
  //     true
  //   );
  // },

  setInitialTempOrder: order => set (() => ({tempOrder: order})),

  // setDraftOrderId: res => set (() => ({draftOrderId: res})),

  // getTotal: () =>
  //   set (state => ({
  //     total: state.tempOrder
  //       .map (item => parseInt (item.price) * parseInt (item.quantity))
  //       .reduce ((a, b) => a + b, 0),
  //   })),
}));

export default useStore;
