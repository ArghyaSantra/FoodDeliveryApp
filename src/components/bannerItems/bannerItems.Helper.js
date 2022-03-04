export const getBannerItems = () => {
  const banneritems = [
    {
      id: 1,
      details: {
        bannerText: "Grab 60% off on Fresh Flavours",
        bannerUnderline: "Explore an array of treats to burst your cravings",
        picId:
          "https://media.glamour.com/photos/5f0ded3c6ebfe4554e35b781/master/w_2160,h_1500,c_limit/Freshly-MealGroup_2160x1500.jpg",
      },
    },
    {
      id: 2,
      details: {
        bannerText: "Grab 20% off! Use Coupon 'Party'",
        bannerUnderline: "Auntie Fungs",
        picId:
          "https://www.bigbasket.com/media/uploads/recipe/w-l/1357_1_1.jpg",
      },
    },
    {
      id: 3,
      details: {
        bannerText: "Grab 20% off! Use Coupon 'Swiggy It'",
        bannerUnderline: "The Soup Project",
        picId:
          "https://www.whiskaffair.com/wp-content/uploads/2020/03/mayonnaise-Sandwich-3.jpg",
      },
    },
    {
      id: 4,
      details: {
        bannerText: "Enjoy 50% off! Use Coupon 'TryNew'",
        bannerUnderline: "Biryani Blues",
        picId:
          "https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__700_0_0_0_auto.jpg",
      },
    },
    {
      id: 5,
      details: {
        bannerText: "Enjoy 20% off! Use Coupon 'TryNew'",
        bannerUnderline: "Bangalore Thindies",
        picId:
          "https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg",
      },
    },
  ];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(banneritems);
    }, 500);
  });
};
