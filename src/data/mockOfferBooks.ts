import BookOffer from "../assets/images/book.png";
import type { BookOfferType } from "../types/types";
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
  {
    id: "2",
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
