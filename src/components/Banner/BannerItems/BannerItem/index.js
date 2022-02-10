import BannerItem from "./BannerItem";

export const backGroundStyleBuilder = (info) => {
  const url = ("url" + "(" + info + ")").toString();
  return {
    backgroundImage: url,
  };
};

export default BannerItem;
