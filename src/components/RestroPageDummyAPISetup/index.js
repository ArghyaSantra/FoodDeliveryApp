export const getRestroDishes = () => {
  const restro_dishes = [
    {
      id: 1,
      details: {
        Name: "Premium Kadhai Chicken Pulao Thali",
        Description:
          "Kadhai Chicken , Pulao served with pickle , raita ,gulab jamun ,2 Pcs Chicken Tikka",
        Price: "₹289",
        Choice: "Non Veg",
        Pic_Id:
          "https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg",
      },
    },
    {
      id: 2,
      details: {
        Name: "Premium Paneer Butter Masala Roti Thali",
        Description:
          "Paneer Butter Masala , 2 Nos Roti , 2 pcs Paneer Tikka served with pickle , raita ,gulab jamun , Green Chutney & Salad",
        Price: "₹279",
        Choice: "Veg",
        Pic_Id:
          "https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__700_0_0_0_auto.jpg",
      },
    },
    {
      id: 3,
      details: {
        Name: "Dhaniya Chicken Tikka",
        Description:
          "Succulent chicken marinated & flavoured with fresh coriander, grilled to perfection",
        Price: "₹249",
        Choice: "Non Veg",
        Pic_Id:
          "https://www.whiskaffair.com/wp-content/uploads/2020/03/mayonnaise-Sandwich-3.jpg",
      },
    },
    {
      id: 4,
      details: {
        Name: "Shahi Chicken Tikka Patiala",
        Description: "Spicy chicken Tikka prepped Patiala-style.",
        Price: "₹249",
        Choice: "Non Veg",
        Pic_Id:
          " https://www.bigbasket.com/media/uploads/recipe/w-l/1357_1_1.jpg",
      },
    },
    {
      id: 5,
      details: {
        Name: "Half Tandoori Chicken - Bathinda Style",
        Description: "Bathinda-style spicy-charred Tandoori chicken.",
        Price: "₹299",
        Choice: "Non Veg",
        Pic_Id:
          "https://media.glamour.com/photos/5f0ded3c6ebfe4554e35b781/master/w_2160,h_1500,c_limit/Freshly-MealGroup_2160x1500.jpg",
      },
    },
    {
      id: 6,
      details: {
        Name: "Methi Chicken Tikka Barnala",
        Description:
          "Barnala-style tender chicken Tikka flavoured with aromatic Methi.",
        Price: "₹249",
        Choice: "Non Veg",
        Pic_Id:
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
