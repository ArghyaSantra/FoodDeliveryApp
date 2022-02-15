export const backGroundStyleBuilder = (info) => {
  const url = ("url" + "(" + info + ")").toString();
  return {
    backgroundImage: url,
  };
};
