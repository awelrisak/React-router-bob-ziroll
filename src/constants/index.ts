export const vanTypeBackgroundColor = {
   simple: "orange",
   luxury: "black",
   rugged: "green"
}

export const navLinkStyles = (activeColor, fontSize)  => ({ isActive }) => { 
  return {
    boxSizing: "border-box",
   px: 8,
   py: 4,
   borderBottom: isActive ? "2px solid black" : "none",
   pb: isActive ? 2 : 0,
    fontWeight: isActive ? "bold" : "normal",
    color: isActive ? activeColor : "#00000070",
    fontSize
  };
};

export const mainNav = [
   {
    id: "host",
    label: "HOST",
    to: "host",
    style: navLinkStyles
  },
  {
    id: "about",
    label: "ABOUT",
    to: "about",
    style: navLinkStyles
  },
  {
    id: "vans",
    label: "VANS",
    to: "vans",
    style: navLinkStyles
  }
]



export const hostNav = [
   {
    id: "dashboard",
    label: "DASHBOARD",
    to: ".",
    style: navLinkStyles,
    end: true
  },
  {
    id: "income",
    label: "INCOME",
    to: "income",
    style: navLinkStyles
  },
  {
    id: "vans",
    label: "VANS",
    to: "vans",
    style: navLinkStyles
  },
   {
    id: "reviews",
    label: "REVIEWS",
    to: "reviews",
    style: navLinkStyles
  }
]

export const hostVanNav = [
   {
    id: "details",
    label: "DETAILS",
    to: ".",
    style: navLinkStyles,
    end: true
  },
  {
    id: "pricing",
    label: "Pricing",
    to: "pricing",
    style: navLinkStyles
  },
  {
    id: "photos",
    label: "PHOTOS",
    to: "photos",
    style: navLinkStyles
  },
]

export const monthlyRevenue = [
  {
    month: "July",
    revenue: 2260
  },
   {
    month: "Aug",
    revenue: 2260
  },
   {
    month: "Sep",
    revenue: 2260
  },
   {
    month: "Oct",
    revenue: 2260
  },
   {
    month: "Nov",
    revenue: 2260
  },
   {
    month: "Dec",
    revenue: 2260
  }
]


export const ratingsSummaryData = [
  {
    id: 1,
    starType: 5,
    percentage: 50
  },
  {
    id: 2,
    starType: 4,
    percentage: 15
  },
  {
    id: 3,
    starType: 3,
    percentage: 10
  },
  {
    id: 4,
    starType: 2,
    percentage: 15
  },
  {
    id: 5,
    starType: 1,
    percentage: 10
  },
];


export const vanReviews = [
  {
    starValue: 5,
    name: "John",
    date: "December 1, 2021",
    comment: "The Modest Explorer van was fantastic! It was clean, comfortable, and had all the amenities we needed. We had an amazing time exploring the countryside. Highly recommend!"
  },
  {
    starValue: 4,
    name: "Emily",
    date: "January 15, 2022",
    comment: "We had a great experience with the Beach Bum van from Vanlife. It was perfect for our surfing trip, and the unique features in the van made it even more enjoyable. The rental process was smooth, and the host was helpful. Would rent again!"
  },
  {
    starValue: 3,
    name: "Sarah",
    date: "March 5, 2022",
    comment: "The Reliable Red van we rented was decent. It provided a comfortable and cozy interior, but we expected a bit more luxury for the price. The kitchenette was useful, but some appliances could have been better. Overall, an average experience."
  },
  {
    starValue: 2,
    name: "Michael",
    date: "April 20, 2022",
    comment: "Dreamfinder van didn't quite live up to our expectations. The high ceiling and large windows were nice, but the cleanliness of the van was subpar. We also encountered some issues with the water system. Improvement needed."
  },
  {
    starValue: 1,
    name: "Lisa",
    date: "June 10, 2022",
    comment: "Our experience with The Cruiser van was extremely disappointing. The van had multiple mechanical issues, and the luxury amenities were not as advertised. The view was the only redeeming factor, but it did not make up for the poor overall experience. Strongly not recommended."
  }
];

export const transactions = [
  {
    id: 1,
    date: '01/07/2023',
    amount: 50.0
  },
  {
    id: 2,
    date: '05/07/2023',
    amount: 100.0
  },
  {
    id: 3,
    date: '10/07/2023',
    amount: 260.0
  },
   {
    id: 4,
    date: '10/07/2023',
    amount: 230.0
  },
   {
    id: 5,
    date: '8/07/2023',
    amount: 400.0
  }
];

