export default function generateAddress(nameofTheField, value, currentAddress) {
  if (nameofTheField === "address-txtfield") {
    return {
      ...currentAddress,
      firstLine: value,
    };
  }
  if (nameofTheField === "flat-txtfield") {
    return {
      ...currentAddress,
      secondLine: value,
    };
  }
  if (nameofTheField === "landmark-txtfield") {
    return {
      ...currentAddress,
      thirdLine: value,
    };
  }
}
