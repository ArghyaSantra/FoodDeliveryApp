import { useSelector } from "react-redux";

export const changeCurrentAddress = (currentAddress, name, value) => {
  //
  if (name === "address-txtfield") {
    currentAddress = { ...currentAddress, firstLine: value };
  }
  if (name === "flat-txtfield") {
    currentAddress = { ...currentAddress, secondLine: value };
  }
  if (name === "landmark-txtfield") {
    currentAddress = { ...currentAddress, thirdLine: value };
  }
  return currentAddress;
};
