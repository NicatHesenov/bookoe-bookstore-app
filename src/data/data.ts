import BookOffer from "../assets/images/BookCardOffer/bookOffer.png";
import type {
  BookListType,
  BookOfferType,
  BookSaleType,
  BookGridType,
} from "../types/types";
import BookSale from "../assets/images/BookCardSale/BookSale.png";
export const mockOfferBooks: BookOfferType[] = [
  {
    id: "1",
    imageUrl: BookOffer,
    title: "SECONDS [Part I]",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ",
    categories: ["BIOGRAPHY", "THRILLER", "HORROR"],
    author: "Kevin Smiley",
    rating: 4.5,
    price: "$435",
    oldPrice: 34,
    discont: "20%",
  },
];
export const mockSaleBooks: BookSaleType[] = [
  {
    id: "1",
    imageUrl: BookSale,
    title: "The Missadventure of..",
    categories: ["ADVANTURE, SURVIVAL"],
    rating: 4.7,
    price: "$45.4",
    oldPrice: "$98.4",
    discont: "50%",
  },
];
export const mockGridBooks: BookGridType[] = [
  {
    id: "1",
    imageUrl: BookSale,
    title: "Thunder Stunt",
    categories: ["adventure", "survival", "comedy"],
    price: 4.7,
    oldPrice: 50,
  },
];

export const mockListBooks: BookListType[] = [
  {
    id: "1",
    imageUrl: BookSale,
    title: "Thunde Stunt",
    categories: ["advanture", "science"],
    rating: "4.0",
    reviewsCount: "235",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    price: 84.78,
    oldPrice: 90.0,
    promos: ["Get 20% Discount for today", "50% OFF Discount", "See 2+ promos"],
    author: "Kevin Smiley",
    publisher: "Printarea Studios",
    year: 2019,
  },
];
