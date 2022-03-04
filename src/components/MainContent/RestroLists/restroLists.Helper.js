export const getRestroList = (highlight) => {
  //let restrolist = [];
  //if (!highlight || highlight === "Offers Near You") {
  const restrolist = {
    "Offers Near You": [
      {
        id: 1,
        details: {
          picId:
            "https://assets.cntraveller.in/photos/612f08a19fd022fa9f74f1e8/16:9/w_1280,c_limit/The%20Verandah.jpeg",
          name: "King of Spices",
          tags: [
            "South Indian",
            "North Indian",
            "Chaat",
            "Chinese",
            "Beverages",
          ],
          ratings: "4.1",
          eta: "32 mins",
          price: "₹ 500 for two",
          offers: "Use FREE20 for 20% Off",
        },
      },
      {
        id: 2,
        details: {
          picId:
            "https://assets.cntraveller.in/photos/612f033d9fd022fa9f74f1e0/master/w_1600%2Cc_limit/Townsend.jpg",
          name: "Cardamom",
          tags: [
            "South Indian",
            "North Indian",
            "Chaat",
            "Chinese",
            "Beverages",
          ],
          ratings: "4.0",
          eta: "32 mins",
          price: "₹ 500 for two",
        },
      },
      {
        id: 3,
        details: {
          picId:
            "https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2953%2Ftrend20201009113426.jpg",
          name: "Goan Cafe",
          tags: [
            "South Indian",
            "North Indian",
            "Chaat",
            "Chinese",
            "Beverages",
          ],
          ratings: "4.3",
          eta: "28 mins",
          price: "₹ 500 for two",
          offers: "Use FREE20 for 20% Off",
        },
      },
      {
        id: 4,
        details: {
          picId: "https://images.indianexpress.com/2020/09/restuarant.jpg",
          name: "The Spice Delight",
          tags: [
            "South Indian",
            "North Indian",
            "Chaat",
            "Chinese",
            "Beverages",
          ],
          ratings: "4.2",
          eta: "42 mins",
          price: "₹ 500 for two",
        },
      },
      {
        id: 5,
        details: {
          picId:
            "https://media-cdn.tripadvisor.com/media/photo-s/17/bb/3e/4f/taj-indian-restaurant.jpg",
          name: "The Kebab Island",
          tags: [
            "South Indian",
            "North Indian",
            "Chaat",
            "Chinese",
            "Beverages",
          ],
          ratings: "4.5",
          eta: "38 mins",
          price: "₹ 500 for two",
        },
      },
      {
        id: 6,
        details: {
          picId:
            "https://www.wallpaperup.com/uploads/wallpapers/2014/11/09/511973/3200799904ca51bf942335d95f790edf-700.jpg",
          name: "Masala Maarke",
          tags: [
            "South Indian",
            "North Indian",
            "Chaat",
            "Chinese",
            "Beverages",
          ],
          ratings: "4.2",
          eta: "30 mins",
          price: "₹ 500 for two",
          offers: "Use FREE20 for 20% Off",
        },
      },
    ],
    "Top Picks": [
      {
        id: 1,
        details: {
          picId:
            "https://assets.cntraveller.in/photos/612f08a19fd022fa9f74f1e8/16:9/w_1280,c_limit/The%20Verandah.jpeg",
          name: "King of Spices",
          tags: [
            "South Indian",
            "North Indian",
            "Chaat",
            "Chinese",
            "Beverages",
          ],
          ratings: "4.1",
          eta: "32 mins",
          price: "₹ 500 for two",
          offers: "Use FREE20 for 20% Off",
        },
      },
    ],
    "What's New": [
      {
        id: 1,
        details: {
          picId:
            "https://assets.cntraveller.in/photos/612f08a19fd022fa9f74f1e8/16:9/w_1280,c_limit/The%20Verandah.jpeg",
          name: "King of Spices",
          tags: [
            "South Indian",
            "North Indian",
            "Chaat",
            "Chinese",
            "Beverages",
          ],
          ratings: "4.1",
          eta: "32 mins",
          price: "₹ 500 for two",
          offers: "Use FREE20 for 20% Off",
        },
      },
    ],
    Premium: [
      {
        id: 3,
        details: {
          picId:
            "https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2953%2Ftrend20201009113426.jpg",
          name: "Goan Cafe",
          tags: [
            "South Indian",
            "North Indian",
            "Chaat",
            "Chinese",
            "Beverages",
          ],
          ratings: "4.3",
          eta: "28 mins",
          price: "₹ 500 for two",
          offers: "Use FREE20 for 20% Off",
        },
      },
      {
        id: 4,
        details: {
          picId: "https://images.indianexpress.com/2020/09/restuarant.jpg",
          name: "The Spice Delight",
          tags: [
            "South Indian",
            "North Indian",
            "Chaat",
            "Chinese",
            "Beverages",
          ],
          ratings: "4.2",
          eta: "42 mins",
          price: "₹ 500 for two",
        },
      },
      {
        id: 5,
        details: {
          picId:
            "https://media-cdn.tripadvisor.com/media/photo-s/17/bb/3e/4f/taj-indian-restaurant.jpg",
          name: "The Kebab Island",
          tags: [
            "South Indian",
            "North Indian",
            "Chaat",
            "Chinese",
            "Beverages",
          ],
          ratings: "4.5",
          eta: "38 mins",
          price: "₹ 500 for two",
        },
      },
    ],
    "See All": [
      {
        id: 3,
        details: {
          picId:
            "https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2953%2Ftrend20201009113426.jpg",
          name: "Goan Cafe",
          tags: [
            "South Indian",
            "North Indian",
            "Chaat",
            "Chinese",
            "Beverages",
          ],
          ratings: "4.3",
          eta: "28 mins",
          price: "₹ 500 for two",
          offers: "Use FREE20 for 20% Off",
        },
      },
      {
        id: 4,
        details: {
          picId: "https://images.indianexpress.com/2020/09/restuarant.jpg",
          name: "The Spice Delight",
          tags: [
            "South Indian",
            "North Indian",
            "Chaat",
            "Chinese",
            "Beverages",
          ],
          ratings: "4.2",
          eta: "42 mins",
          price: "₹ 500 for two",
        },
      },
    ],
  };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(restrolist);
    }, 100);
  });
};
