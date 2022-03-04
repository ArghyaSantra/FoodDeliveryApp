export const getHighlightsList = () => {
  const highlights = [
    {
      id: 1,
      details: {
        title: "Offers Near You",
        options: "323 Options",
        iconClass: "fi fi-rr-earnings",
      },
    },
    {
      id: 2,
      details: {
        title: "Top Picks",
        options: "107 Options",
        iconClass: "fi fi-rr-flame",
      },
    },
    {
      id: 3,
      details: {
        title: "What's New",
        options: "177 Options",
        iconClass: "fi fi-rr-noodles",
      },
    },
    {
      id: 4,
      details: {
        title: "Premium",
        options: "106 Options",
        iconClass: "fi fi-rr-diamond",
      },
    },
    {
      id: 5,
      details: {
        title: "See All",
        options: "1410 Options",
        iconClass: "fi fi-rr-arrow-down",
      },
    },
  ];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(highlights);
    }, 500);
  });
};
