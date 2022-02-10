export const getBannerItems = () => {
  const banneritems = [
    {
      id: 1,
      details: {
        banner_text: "Grab 60% off on Fresh Flavours",
        banner_underline: "Explore an array of treats to burst your cravings",
        pic_id:
          "https://media.glamour.com/photos/5f0ded3c6ebfe4554e35b781/master/w_2160,h_1500,c_limit/Freshly-MealGroup_2160x1500.jpg",
      },
    },
    {
      id: 2,
      details: {
        banner_text: "Grab 20% off! Use Coupon 'Party'",
        banner_underline: "Auntie Fungs",
        pic_id:
          "https://www.bigbasket.com/media/uploads/recipe/w-l/1357_1_1.jpg",
      },
    },
    {
      id: 3,
      details: {
        banner_text: "Grab 20% off! Use Coupon 'Swiggy It'",
        banner_underline: "The Soup Project",
        pic_id:
          "https://www.whiskaffair.com/wp-content/uploads/2020/03/mayonnaise-Sandwich-3.jpg",
      },
    },
    {
      id: 4,
      details: {
        banner_text: "Enjoy 50% off! Use Coupon 'TryNew'",
        banner_underline: "Biryani Blues",
        pic_id:
          "https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__700_0_0_0_auto.jpg",
      },
    },
    {
      id: 5,
      details: {
        banner_text: "Enjoy 20% off! Use Coupon 'TryNew'",
        banner_underline: "Bangalore Thindies",
        pic_id:
          "https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg",
      },
    },
  ];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(banneritems);
    }, 100);
  });
};

export const getRestroList = () => {
  const restrolist = [
    {
      id: 1,
      details: {
        pic_id:
          "https://assets.cntraveller.in/photos/612f08a19fd022fa9f74f1e8/16:9/w_1280,c_limit/The%20Verandah.jpeg",
        Name: "King of Spices",
        Tags: ["South Indian", "North Indian", "Chaat", "Chinese", "Beverages"],
        Ratings: "4.1",
        ETA: "32 mins",
        Price: "₹ 500 for two",
        Offers: "Use FREE20 for 20% Off",
      },
    },
    {
      id: 2,
      details: {
        pic_id:
          "https://assets.cntraveller.in/photos/612f033d9fd022fa9f74f1e0/master/w_1600%2Cc_limit/Townsend.jpg",
        Name: "Cardamom",
        Tags: ["South Indian", "North Indian", "Chaat", "Chinese", "Beverages"],
        Ratings: "4.0",
        ETA: "32 mins",
        Price: "₹ 500 for two",
        Offers: "Use FREE20 for 20% Off",
      },
    },
    {
      id: 3,
      details: {
        pic_id:
          "https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2953%2Ftrend20201009113426.jpg",
        Name: "Goan Cafe",
        Tags: ["South Indian", "North Indian", "Chaat", "Chinese", "Beverages"],
        Ratings: "4.3",
        ETA: "28 mins",
        Price: "₹ 500 for two",
        Offers: "Use FREE20 for 20% Off",
      },
    },
    {
      id: 4,
      details: {
        pic_id: "https://images.indianexpress.com/2020/09/restuarant.jpg",
        Name: "The Spice Delight",
        Tags: ["South Indian", "North Indian", "Chaat", "Chinese", "Beverages"],
        Ratings: "4.2",
        ETA: "42 mins",
        Price: "₹ 500 for two",
        Offers: "Use FREE20 for 20% Off",
      },
    },
    {
      id: 5,
      details: {
        pic_id:
          "https://media-cdn.tripadvisor.com/media/photo-s/17/bb/3e/4f/taj-indian-restaurant.jpg",
        Name: "The Kebab Island",
        Tags: ["South Indian", "North Indian", "Chaat", "Chinese", "Beverages"],
        Ratings: "4.5",
        ETA: "38 mins",
        Price: "₹ 500 for two",
        Offers: "Use FREE20 for 20% Off",
      },
    },
    {
      id: 6,
      details: {
        pic_id:
          "https://www.wallpaperup.com/uploads/wallpapers/2014/11/09/511973/3200799904ca51bf942335d95f790edf-700.jpg",
        Name: "Masala Maarke",
        Tags: ["South Indian", "North Indian", "Chaat", "Chinese", "Beverages"],
        Ratings: "4.2",
        ETA: "30 mins",
        Price: "₹ 500 for two",
        Offers: "Use FREE20 for 20% Off",
      },
    },
  ];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(restrolist);
    }, 100);
  });
};

export const getHighlightsList = () => {
  const highlights = [
    {
      id: 1,
      details: {
        title: "Offers Near You",
        options: "323 Options",
        icon_class: "fi fi-rr-earnings",
      },
    },
    {
      id: 2,
      details: {
        title: "Top Picks",
        options: "107 Options",
        icon_class: "fi fi-rr-flame",
      },
    },
    {
      id: 3,
      details: {
        title: "What's New",
        options: "177 Options",
        icon_class: "fi fi-rr-noodles",
      },
    },
    {
      id: 4,
      details: {
        title: "Premium",
        options: "106 Options",
        icon_class: "fi fi-rr-diamond",
      },
    },
    {
      id: 5,
      details: {
        title: "See All",
        options: "1410 Options",
        icon_class: "fi fi-rr-arrow-down",
      },
    },
  ];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(highlights);
    }, 100);
  });
};
