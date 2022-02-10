import Cart from "./Cart";

export const filteredData = (info) => {
  let total = 0;
  let finalCartDetails = info.filter((detail, id) => id % 2 == 0);
  finalCartDetails.forEach((dishes) => {
    total += parseFloat(dishes.Price.substring(1));
  });
  return [finalCartDetails, total];
};
export default Cart;
