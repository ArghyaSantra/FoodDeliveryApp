export const filteredData = (info) => {
  let total = 0;
  let finalCartDetails = info;
  finalCartDetails.forEach((dishes) => {
    total += parseFloat(dishes.price.substring(1));
  });
  return [finalCartDetails, total];
};
