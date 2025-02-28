import {
  RiFootprintLine,
  RiInfinityLine,
  RiLandscapeLine,
  RiLeafLine,
} from "react-icons/ri";

export const categories = {
  city: {
    title: "City",
    description: "Elegant, functional design for the modern urban explorer.",
  },
  mountain: {
    title: "Mountain",
    description: "Durable, stylish gear for those who conquer the wild.",
  },
};

export const contactFormCategories = [
  { key: "order", label: "Order" },
  { key: "shipping", label: "Shipping" },
  { key: "return", label: "Return" },
  { key: "questions", label: "Product questions" },
  { key: "other", label: "Other" },
];

export const shippingMethodPrice = {
  economy: 69,
  home: 159,
};

export const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "title-asc", label: "Alphabetically, A-Z" },
  { value: "title-desc", label: "Alphabetically, Z-A" },
  { value: "price-asc", label: "Price, low to high" },
  { value: "price-desc", label: "Price, high to low" },
];

export const topSearch = [
  { key: "1", label: "pack" },
  { key: "2", label: "metro" },
  { key: "3", label: "oslo" },
  { key: "4", label: "mountain" },
  { key: "5", label: "commuter" },
];

export const brandValues = [
  {
    value: "Nordic craftmanship",
    descripton:
      "Designed in Norway, inspired by the rugged landscapes of the North. Every detail reflects precision, durability, and timeless Scandinavianaesthetics",
    icon: RiLandscapeLine,
  },
  {
    value: "For adventure",
    descripton:
      "Versatile backpacks engineered for both urban and outdoor explorers. Whether in the city or the mountains, Nordheim moves with you",
    icon: RiFootprintLine,
  },
  {
    value: "Sustainably built",
    descripton:
      "Eco-friendly materials and responsible production ensure a minimal footprint. Thoughtfully crafted for those who care about the planet.",
    icon: RiLeafLine,
  },
  {
    value: "Minimal & functional",
    descripton:
      "Sleek, modern designs that blend elegance with practicality. Every backpack is made to adapt seamlessly to your lifestyle.",
    icon: RiInfinityLine,
  },
];
