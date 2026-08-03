import BookOffer from "../assets/images/BookCardOffer/bookOffer.png";
import type { BookOfferType } from "../types/types";
import BookSale from "../assets/images/BookCardSale/BookSale.png";
import type { BookSaleType } from "../types/types";
import type { BookGridType } from "../types/types";
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
