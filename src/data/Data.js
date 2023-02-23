import getConfig from "next/config";
import Logo from "../../public/assets/images/logo.png";
import BlogImage from "../../public/assets/images/properties/p1.png";
import AuthorImage from "../../public/assets/images/people/person1.jpg";
import {
  person1,
  person2,
  person3,
  person4,
  person5,
} from "../../public/assets/images/people";
import { p1, p2, p3, p4, p5, p6 } from "../../public/assets/images/properties";
import {
  Avatar1,
  Avatar2,
  Avatar3,
  Avatar4,
  Avatar5,
} from "../../public/assets/images/Avatars";
import {
  city1,
  city2,
  city3,
  city4,
  city5,
  city6,
} from "../../public/assets/images/cities";
import Avatar from "@/components/utils/ProfileAvatar";

export const helpSectionData = [
  {
    image: Avatar1,
    title: "Buy a home",
    subtitle:
      "With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.",
    buttonText: "Find a home",
  },
  {
    image: Avatar2,
    title: "Rent a home",
    subtitle:
      "With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.",
    buttonText: "Rent a home",
  },
  {
    image: Avatar3,
    title: "See neighborhoods",
    subtitle:
      "With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.",
    buttonText: "Learn more",
  },
];

export const profileLinks = [
  {
    name: "Profile",
    path: "/dashboard/profile",
  },

  { name: "Saved Homes", path: "/homes/saved", forAuthenticated: true },
  {
    name: "Saved Searches",
    path: "/searches/saved",
  },
  {
    name: "Logout",
  },
];
export const nav = {
  logo: { image: Logo, path: "/" },
  links: {
    leftLinks: [
      {
        name: "Buy",
        path: "/buy",
        dropItems: [
          { name: "Homes for Sale", path: "/homes-for-sale" },
          { name: "Open Houses", path: "/open-houses" },
          { name: "New Houses", path: "/new-homes" },
          { name: "Recently Sold", path: "/recently-sold" },
        ],
      },
      {
        name: "Rent",
        path: "/rent",
        dropItems: [
          { name: "All Rentals", path: "/rent/all" },
          { name: "Apartments For Rent", path: "/rent/apartments" },
          { name: "Houses For Rent", path: "/rent/houses" },
          { name: "Post A Rental Listing", path: "/post" },
        ],
      },
      {
        name: "Mortgage",
        path: "mortgage",
        dropItems: [
          { name: "Mortgage overview", path: "/mortgage/overview" },
          { name: "Get Pre-Qualified", path: "/mortgage/prequalified" },
          { name: "Mortgage Rates", path: "/mortgage/rates" },
          { name: "Refinance Rates", path: "/mortgage/refinance/rates" },
          { name: "Mortgage Calculator", path: "/mortgage/calculator" },
          {
            name: "Affordibility Calculator",
            path: "/mortgage/affordibility/calculator",
          },
          {
            name: "Refinance Calculator",
            path: "/mortgage/refinance/calculator",
          },
        ],
      },
    ],
    rightLinks: [
      {
        name: "Sign up or Log in",
        path: "/auth",
        isButton: true,
        forAuthenticated: false,
      },
    ],
    sideBarLinks: [
      {
        name: "About",
        path: "/about",
      },
      {
        name: "Blogs",
        path: "/blogs",
      },
      {
        name: "Agencies",
        path: "/agencies",
      },
      {
        name: "Buy",
        path: "/buy",
        dropItems: [
          { name: "Homes for Sale", path: "/homes-for-sale" },
          { name: "Open Houses", path: "/open-houses" },
          { name: "New Houses", path: "/new-homes" },
          { name: "Recently Sold", path: "/recently-sold" },
        ],
      },
      {
        name: "Rent",
        path: "/rent",
        dropItems: [
          { name: "All Rentals", path: "/rent/all" },
          { name: "Apartments For Rent", path: "/rent/apartments" },
          { name: "Houses For Rent", path: "/rent/houses" },
          { name: "Post A Rental Listing", path: "/post" },
        ],
      },
      {
        name: "Mortgage",
        path: "mortgage",
        dropItems: [
          { name: "Mortgage overview", path: "/mortgage/overview" },
          { name: "Get Pre-Qualified", path: "/mortgage/prequalified" },
          { name: "Mortgage Rates", path: "/mortgage/rates" },
          { name: "Refinance Rates", path: "/mortgage/refinance/rates" },
          { name: "Mortgage Calculator", path: "/mortgage/calculator" },
          {
            name: "Affordibility Calculator",
            path: "/mortgage/affordibility/calculator",
          },
          {
            name: "Refinance Calculator",
            path: "/mortgage/refinance/calculator",
          },
        ],
      },
      {
        name: "Local Info",
        path: "/local-info",
        dropItems: [
          {
            name: "All Neighbourhood Guides",
            path: "/neighbourhood/guides",
          },
        ],
      },
      {
        name: "Additional Resources",
        path: "/additional-resources",
        dropItems: [
          {
            name: "Our Blogs",
            path: "/blogs",
          },
          {
            name: "Help Center",
            path: "/help",
          },
        ],
      },
      {
        name: "Contact",
        path: "/contact",
      },
    ],
  },
};
export const locationData = {
  provinces: [
    {
      label: "Province1",
      value: "province1",
    },
    {
      label: "Province2",
      value: "province2",
    },
    {
      label: "Province3",
      value: "province3",
    },
    {
      label: "Province4",
      value: "province4",
    },
    {
      label: "Province5",
      value: "province5",
    },
    {
      label: "Province6",
      value: "province6",
    },
    {
      label: "Province7",
      value: "province7",
    },
  ],
  districts: [
    {
      label: "district1",
      value: "district1",
    },
    {
      label: "district2",
      value: "district2",
    },
    {
      label: "district3",
      value: "district3",
    },
    {
      label: "district4",
      value: "district4",
    },
    {
      label: "district5",
      value: "district5",
    },
    {
      label: "district7",
      value: "district7",
    },
    {
      label: "district7",
      value: "district7",
    },
    {
      label: "district8",
      value: "district8",
    },
  ],
  localLevels: [
    { label: "localLevel1", value: "localLevel1" },
    { label: "localLevel2", value: "localLevel2" },
    { label: "localLevel3", value: "localLevel3" },
    { label: "localLevel4", value: "localLevel4" },
    { label: "localLevel5", value: "localLevel5" },
    { label: "localLevel6", value: "localLevel6" },
    { label: "localLevel8", value: "localLevel8" },
    { label: "localLevel9", value: "localLevel9" },
  ],
};

export const propertyMeta = {
  purposes: [
    { label: "Buy", value: "buy" },
    { label: "Rent", value: "rent" },
  ],
  types: [
    { label: "House", value: "house" },
    { label: "Land", value: "land" },
    { label: "Flat", value: "Flat" },
    { label: "officeSpace", value: "officeSpace" },
    { label: "Shop Space", value: "shopSpace" },
    { label: "Apartment", value: "apartment" },
  ],
  budget: [
    { label: "Up to 50k", value: "0to50k" },
    { label: "50k to 5 Lakhs", value: "50kto5lakhs" },
    { label: "5 Lakhs to 50 Lakhs", value: "o5lakhsto50lakhs" },
    { label: " 50 Lakhs to 5 crores", value: "50lakhsto5crores" },
    { label: "Above 3 Crores", value: "above3Crores" },
  ],
};

export const featured = [
  {
    image: Avatar1,
    name: "Family House",
    total: "122 Property",
  },
  {
    image: Avatar2,
    name: "House & Villa",
    total: "155 Property",
  },
  {
    image: Avatar3,
    name: "Apartment",
    total: "300 Property",
  },
  {
    image: Avatar4,
    name: "Office & Studio",
    total: "80 Property",
  },
  {
    image: Avatar5,
    name: "Villa & Condo",
    total: "80 Property",
  },
];
export const list = [
  {
    id: 1,
    image: p1,
    name: "Red Carpet Real Estate",
    location: "210 Zirak Road, Canada",
    category: "For Rent",
    price: "$3,700",
    type: "Apartment",
  },
  {
    id: 2,
    image: p1,
    name: "Fairmount Properties",
    location: "5698 Zirak Road, NewYork",
    category: "For Sale",
    price: "$9,750",
    type: "Condos",
  },
  {
    id: 3,
    image: p2,
    name: "The Real Estate Corner",
    location: "5624 Mooker Market, USA",
    category: "For Rent",
    price: "$5,860",
    type: "Offices",
  },
  {
    id: 4,
    image: p3,
    name: "Herringbone Realty",
    location: "5621 Liverpool, London",
    category: "For Sale",
    price: "$7,540",
    type: "Homes & Villas",
  },
  {
    id: 5,
    image: p4,
    name: "Brick Lane Realty",
    location: "210 Montreal Road, Canada",
    category: "For Rent",
    price: "$4,850",
    type: "Commercial",
  },
  {
    id: 6,
    image: p5,
    name: "Banyon Tree Realty",
    location: "210 Zirak Road, Canada",
    category: "For Sale",
    price: "$2,742",
    type: "Apartment",
  },
];
export const agencies = [
  {
    image: Avatar1,
    name: "Nepal Bhoomi Real Estate Agency",
    total: "96",
  },
  {
    image: Avatar2,
    name: "Nepal Home Search",
    total: "225",
  },
  {
    image: Avatar3,
    name: "Smart D Estate",
    total: "165",
  },
  {
    image: Avatar4,
    name: "Property 247",
    total: "20",
  },
  {
    image: Avatar5,
    name: "Property 360 Nepal",
    total: "82",
  },
];

// filterData
export const filterData = [
  {
    type: "radio",
    name: "Purpose",
    items: [
      { name: "Buy", value: "for-sale" },
      { name: "Rent", value: "for-rent" },
    ],
    placeholder: "Purpose",
    queryName: "purpose",
  },
  {
    name: "rentFrequency",
    type: "radio",
    items: [
      { name: "Daily", value: "daily" },
      { name: "Weekly", value: "weekly" },
      { name: "Monthly", value: "monthly" },
      { name: "Yearly", value: "yearly" },
    ],
    placeholder: "Rent Frequency",
    queryName: "rentFrequency",
  },
  // {
  //   type:"radio",
  //   items: [
  //     { name: "10,000", value: "10000" },
  //     { name: "20,000", value: "20000" },
  //     { name: "30,000", value: "30000" },
  //     { name: "40,000", value: "40000" },
  //     { name: "50,000", value: "50000" },
  //     { name: "60,000", value: "60000" },
  //     { name: "85,000", value: "85000" },
  //   ],
  //   placeholder: "Min Price(AED)",
  //   queryName: "minPrice",
  // },
  // {
  //   items: [
  //     { name: "50,000", value: "50000" },
  //     { name: "60,000", value: "60000" },
  //     { name: "85,000", value: "85000" },
  //     { name: "110,000", value: "110000" },
  //     { name: "135,000", value: "135000" },
  //     { name: "160,000", value: "160000" },
  //     { name: "185,000", value: "185000" },
  //     { name: "200,000", value: "200000" },
  //     { name: "300,000", value: "300000" },
  //     { name: "400,000", value: "400000" },
  //     { name: "500,000", value: "500000" },
  //     { name: "600,000", value: "600000" },
  //     { name: "700,000", value: "700000" },
  //     { name: "800,000", value: "800000" },
  //     { name: "900,000", value: "900000" },
  //     { name: "1000,000", value: "1000000" },
  //   ],
  //   placeholder: "Max Price(AED)",
  //   queryName: "maxPrice",
  // },
  {
    name: "sort",
    type: "radio",
    items: [
      { name: "Lowest Price", value: "price-asc" },
      { name: "Highest Price", value: "price-des" },
      { name: "Newest", value: "date-asc" },
      { name: "Oldest", value: "date-desc" },
      { name: "Verified", value: "verified-score" },
      { name: "City Level Score", value: "city-level-score" },
    ],
    placeholder: "Sort",
    queryName: "sort",
  },
  // {

  //   items: [
  //     { name: "1000", value: "1000" },
  //     { name: "2000", value: "2000" },
  //     { name: "3000", value: "3000" },
  //     { name: "4000", value: "4000" },
  //     { name: "5000", value: "5000" },
  //     { name: "10000", value: "10000" },
  //     { name: "20000", value: "20000" },
  //   ],
  //   placeholder: "Max Area(sqft)",
  //   queryName: "areaMax",
  // },
  // {
  //   items: [
  //     { name: "1", value: "1" },
  //     { name: "2", value: "2" },
  //     { name: "3", value: "3" },
  //     { name: "4", value: "4" },
  //     { name: "5", value: "5" },
  //     { name: "6", value: "6" },
  //     { name: "7", value: "7" },
  //     { name: "8", value: "8" },
  //     { name: "9", value: "9" },
  //     { name: "10", value: "10" },
  //   ],
  //   placeholder: "Rooms",
  //   queryName: "roomsMin",
  // },
  // {
  //   items: [
  //     { name: "1", value: "1" },
  //     { name: "2", value: "2" },
  //     { name: "3", value: "3" },
  //     { name: "4", value: "4" },
  //     { name: "5", value: "5" },
  //     { name: "6", value: "6" },
  //     { name: "7", value: "7" },
  //     { name: "8", value: "8" },
  //     { name: "9", value: "9" },
  //     { name: "10", value: "10" },
  //   ],
  //   placeholder: "Baths",
  //   queryName: "bathsMin",
  // },
  {
    name: "furnishingStatus",
    type: "radio",
    items: [
      { name: "Furnished", value: "furnished" },
      { name: "Unfurnished", value: "unfurnished" },
    ],
    placeholder: "Furnish Type",
    queryName: "furnishingStatus",
  },
  {
    items: [
      { name: "Apartment", value: "4" },
      { name: "Townhouses", value: "16" },
      { name: "Villas", value: "3" },
      { name: "Penthouses", value: "18" },
      { name: "Hotel Apartments", value: "21" },
      { name: "Villa Compound", value: "19" },
      { name: "Residential Plot", value: "14" },
      { name: "Residential Floor", value: "12" },
      { name: "Residential Building", value: "17" },
    ],
    placeholder: "Property Type",
    queryName: "categoryExternalID",
  },
];

export const awards = [
  {
    icon: <i class="fa-solid fa-trophy"></i>,
    num: "32 M	",
    name: "Blue Burmin Award",
  },
  {
    icon: <i class="fa-solid fa-briefcase"></i>,
    num: "43 M",
    name: "Mimo X11 Award",
  },
  {
    icon: <i class="fa-solid fa-lightbulb"></i>,
    num: "51 M",
    name: "Australian UGC Award",
  },
  {
    icon: <i class="fa-solid fa-heart"></i>,
    num: "42 M",
    name: "IITCA Green Award",
  },
];
export const location = [
  {
    id: 1,
    name: "New Orleans, Louisiana",
    Villas: "12 Villas",
    Apartments: "10 Apartments",
    Offices: "07 Offices",
    image: city1,
  },
  {
    id: 2,
    name: "Jerrsy, United State",
    Villas: "12 Villas",
    Apartments: "10 Apartments",
    Offices: "07 Offices",
    image: city2,
  },
  {
    id: 3,
    name: "Liverpool, London",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Offices",
    image: city3,
  },
  {
    id: 4,
    name: "NewYork, United States",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Offices",
    image: city4,
  },
  {
    id: 5,
    name: "Montreal, Canada",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Offices",
    image: city5,
  },
  {
    id: 6,
    name: "California, USA",
    Villas: "12 Villas",
    Apartments: " 10 Apartments",
    Offices: "07 Offices",
    image: city6,
  },
];
export const team = [
  {
    list: "50",
    image: person1,
    address: "Liverpool, Canada",
    name: "Sargam S. Singh",
    icon: [
      <i class="fa-brands fa-facebook-f"></i>,
      <i class="fa-brands fa-linkedin"></i>,
      <i class="fa-brands fa-twitter"></i>,
      <i class="fa-brands fa-instagram"></i>,
    ],
  },
  {
    list: "70",
    image: person2,
    address: "Montreal, Canada",
    name: "Harijeet M. Siller",
    icon: [
      <i class="fa-brands fa-facebook-f"></i>,
      <i class="fa-brands fa-linkedin"></i>,
      <i class="fa-brands fa-twitter"></i>,
      <i class="fa-brands fa-instagram"></i>,
    ],
  },
  {
    list: "80",
    image: person3,
    address: "Denever, USA",
    name: "Anna K. Young",
    icon: [
      <i class="fa-brands fa-facebook-f"></i>,
      <i class="fa-brands fa-linkedin"></i>,
      <i class="fa-brands fa-twitter"></i>,
      <i class="fa-brands fa-instagram"></i>,
    ],
  },
  {
    list: "51",
    image: person3,
    address: "2272 Briarwood Drive",
    name: "Michael P. Grimaldo",
    icon: [
      <i class="fa-brands fa-facebook-f"></i>,
      <i class="fa-brands fa-linkedin"></i>,
      <i class="fa-brands fa-twitter"></i>,
      <i class="fa-brands fa-instagram"></i>,
    ],
  },
  {
    list: "42",
    image: person4,
    address: "2272 Briarwood Drive",
    name: "Michael P. Grimaldo",
    icon: [
      <i class="fa-brands fa-facebook-f"></i>,
      <i class="fa-brands fa-linkedin"></i>,
      <i class="fa-brands fa-twitter"></i>,
      <i class="fa-brands fa-instagram"></i>,
    ],
  },
  {
    list: "38",
    image: person5,
    address: "Montreal, USA",
    name: "Adam K. Jollio",
    icon: [
      <i class="fa-brands fa-facebook-f"></i>,
      <i class="fa-brands fa-linkedin"></i>,
      <i class="fa-brands fa-twitter"></i>,
      <i class="fa-brands fa-instagram"></i>,
    ],
  },
];

export const testimonials = [
  {
    name: "john doe",
    profession: "developer",
    avatar: Avatar1,
    text: "Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.",
  },
  {
    name: "Mark Wood",
    profession: "designer",
    avatar: Avatar2,
    text: "Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.",
  },
  {
    name: "john doe",
    profession: "developer",
    avatar: Avatar3,
    text: "Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.",
  },
  {
    name: "Harry Styles",
    profession: "analyst",
    avatar: Avatar4,
    text: "Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.",
  },
];
export const price = [
  {
    plan: "Basic",
    price: "29",
    ptext: "per user, per month",
    list: [
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "99.5% Uptime Guarantee",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "120GB CDN Bandwidth",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "5GB Cloud Storage",
      },
      {
        change: "color",
        icon: <i class="fa-solid fa-x"></i>,
        text: "Personal Help Support",
      },
      {
        change: "color",
        icon: <i class="fa-solid fa-x"></i>,
        text: "Enterprise SLA",
      },
    ],
  },
  {
    best: "Best Value",
    plan: "Standard",
    price: "49",
    ptext: "per user, per month",
    list: [
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "99.5% Uptime Guarantee",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "150GB CDN Bandwidth",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "10GB Cloud Storage",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "Personal Help Support",
      },
      {
        change: "color",
        icon: <i class="fa-solid fa-x"></i>,
        text: "Enterprise SLA",
      },
    ],
  },
  {
    plan: "Platinum",
    price: "79",
    ptext: "2 user, per month",
    list: [
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "100% Uptime Guarantee",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "200GB CDN Bandwidth",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "20GB Cloud Storage",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "Personal Help Support",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "Enterprise SLA",
      },
    ],
  },
];

export const blogs = [
  {
    slug: {
      current: 1,
    },
    mainImage: BlogImage,
    //  {
    //   src: "/images/customer/team-1.jpg",
    //   alt: "blog image",
    // },
    author: {
      name: "john Doe",
      image: AuthorImage,
      alt: "author image",
    },
    categories: [{ title: "Buy", color: "#c75840" }],
    title:
      "Architectural Engineering Wonders of the modern era for your Inspiration",
    publishedAt: "October 21, 2022",
    createdAt: "October 21, 2022",
  },
  {
    slug: {
      current: 1,
    },
    mainImage: BlogImage,
    //  {
    //   src: "/images/customer/team-1.jpg",
    //   alt: "blog image",
    // },
    author: {
      name: "john Doe",
      image: AuthorImage,
      alt: "author image",
    },
    categories: [{ title: "Buy", color: "#c75840" }],
    title:
      "Architectural Engineering Wonders of the modern era for your Inspiration",
    publishedAt: "October 21, 2022",
    createdAt: "October 21, 2022",
  },
  {
    slug: {
      current: 1,
    },
    mainImage: BlogImage,
    //  {
    //   src: "/images/customer/team-1.jpg",
    //   alt: "blog image",
    // },
    author: {
      name: "john Doe",
      image: AuthorImage,
      alt: "author image",
    },
    categories: [{ title: "Buy", color: "#c75840" }],
    title:
      "Architectural Engineering Wonders of the modern era for your Inspiration",
    publishedAt: "October 21, 2022",
    createdAt: "October 21, 2022",
  },
  {
    slug: {
      current: 1,
    },
    mainImage: BlogImage,
    //  {
    //   src: "/images/customer/team-1.jpg",
    //   alt: "blog image",
    // },
    author: {
      name: "john Doe",
      image: AuthorImage,
      alt: "author image",
    },
    categories: [{ title: "Buy", color: "#c75840" }],
    title:
      "Architectural Engineering Wonders of the modern era for your Inspiration",
    publishedAt: "October 21, 2022",
    createdAt: "October 21, 2022",
  },
  {
    slug: {
      current: 1,
    },
    mainImage: BlogImage,
    //  {
    //   src: "/images/customer/team-1.jpg",
    //   alt: "blog image",
    // },
    author: {
      name: "john Doe",
      image: AuthorImage,
      alt: "author image",
    },
    categories: [{ title: "Buy", color: "#c75840" }],
    title:
      "Architectural Engineering Wonders of the modern era for your Inspiration",
    publishedAt: "October 21, 2022",
    createdAt: "October 21, 2022",
  },
  {
    slug: {
      current: 1,
    },
    mainImage: BlogImage,
    //  {
    //   src: "/images/customer/team-1.jpg",
    //   alt: "blog image",
    // },
    author: {
      name: "john Doe",
      image: AuthorImage,
      alt: "author image",
    },
    categories: [{ title: "Buy", color: "#c75840" }],
    title:
      "Architectural Engineering Wonders of the modern era for your Inspiration",
    publishedAt: "October 21, 2022",
    createdAt: "October 21, 2022",
  },
  {
    slug: {
      current: 1,
    },
    mainImage: BlogImage,
    //  {
    //   src: "/images/customer/team-1.jpg",
    //   alt: "blog image",
    // },
    author: {
      name: "john Doe",
      image: AuthorImage,
      alt: "author image",
    },
    categories: [{ title: "Buy", color: "#c75840" }],
    title:
      "Architectural Engineering Wonders of the modern era for your Inspiration",
    publishedAt: "October 21, 2022",
    createdAt: "October 21, 2022",
  },
];
export const footer = [
  {
    title: "LAYOUTS",
    text: [
      { list: "Home Page" },
      { list: "About Page" },
      { list: "Service Page" },
      { list: "Property Page" },
      { list: "Contact Page" },
      { list: "Single Blog" },
    ],
  },
  {
    title: "ALL SECTIONS",
    text: [
      { list: "Headers" },
      { list: "Features" },
      { list: "Attractive" },
      { list: "Testimonials" },
      { list: "Videos" },
      { list: "Footers" },
    ],
  },
  {
    title: "COMPANY",
    text: [
      { list: "About" },
      { list: "Blog" },
      { list: "Pricing" },
      { list: "Affiliate" },
      { list: "Login" },
      { list: "Changelog" },
    ],
  },
];
