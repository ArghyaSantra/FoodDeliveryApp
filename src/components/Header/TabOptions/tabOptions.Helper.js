export const getTabOptions = () => {
  const options = [
    {
      name: "Search",
      id: 1,
      icon_class: "fi fi-rr-search",
    },
    {
      name: "Offers",
      id: 2,
      icon_class: "fi fi-rr-ticket",
    },
    {
      name: "Sign In",
      id: 3,
      icon_class: "fi fi-rr-user",
    },
    {
      name: "Cart",
      id: 4,
      icon_class: "fi fi-rr-shopping-cart",
    },
  ];

  return new Promise((resolve, reject) => {
    resolve(options);
  });
};
