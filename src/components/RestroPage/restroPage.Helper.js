export const getRestroDishes = () => {
  const restro_dishes = [
    {
      id: 1,
      details: {
        name: "Premium Kadhai Chicken Pulao Thali",
        description:
          "Kadhai Chicken , Pulao served with pickle , raita ,gulab jamun ,2 Pcs Chicken Tikka",
        price: "₹289",
        choice: "Non Veg",
        picId:
          "https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg",
      },
    },
    {
      id: 2,
      details: {
        name: "Premium Paneer Butter Masala Roti Thali",
        description:
          "Paneer Butter Masala , 2 Nos Roti , 2 pcs Paneer Tikka served with pickle , raita ,gulab jamun , Green Chutney & Salad",
        price: "₹279",
        choice: "Veg",
        picId:
          "https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__700_0_0_0_auto.jpg",
      },
    },
    {
      id: 3,
      details: {
        name: "Dhaniya Chicken Tikka",
        description:
          "Succulent chicken marinated & flavoured with fresh coriander, grilled to perfection",
        price: "₹249",
        choice: "Non Veg",
        picId:
          "https://www.whiskaffair.com/wp-content/uploads/2020/03/mayonnaise-Sandwich-3.jpg",
      },
    },
    {
      id: 4,
      details: {
        name: "Shahi Chicken Tikka Patiala",
        description: "Spicy chicken Tikka prepped Patiala-style.",
        price: "₹249",
        choice: "Non Veg",
        picId:
          " https://www.bigbasket.com/media/uploads/recipe/w-l/1357_1_1.jpg",
      },
    },
    {
      id: 5,
      details: {
        name: "Half Tandoori Chicken - Bathinda Style",
        description: "Bathinda-style spicy-charred Tandoori chicken.",
        price: "₹299",
        choice: "Non Veg",
        picId:
          "https://media.glamour.com/photos/5f0ded3c6ebfe4554e35b781/master/w_2160,h_1500,c_limit/Freshly-MealGroup_2160x1500.jpg",
      },
    },
    {
      id: 6,
      details: {
        name: "Methi Chicken Tikka Barnala",
        description:
          "Barnala-style tender chicken Tikka flavoured with aromatic Methi.",
        price: "₹249",
        choice: "Non Veg",
        picId:
          "https://media.glamour.com/photos/5f0ded3c6ebfe4554e35b781/master/w_2160,h_1500,c_limit/Freshly-MealGroup_2160x1500.jpg",
      },
    },
  ];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(restro_dishes);
    }, 100);
  });
};
