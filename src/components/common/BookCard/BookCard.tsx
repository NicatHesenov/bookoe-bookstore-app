import { Container } from "@chakra-ui/react";
import BookCardGrid from "./BookCardGrid";
import { mockGridBooks } from "../../../data/data";
// import BookCard from "../components/common/BookCard/BookCard";
// import BookCardOffer from "../components/common/BookCard/BookCardOffer";
// import { mockOfferBooks } from "../data/data";
// import { mockSaleBooks } from "../data/data";
// import BookCardSale from "../components/common/BookCard/BookCardSale";

function BookCard() {
  return (
    <Container>
      {/* <Navbar />
      <Test /> */}
      {/* <BookCardOffer data={mockOfferBooks[0]} /> */}
      {/* <BookCardSale data={mockSaleBooks[0]} /> */}
      <BookCardGrid data={mockGridBooks[0]} />
    </Container>
  );
}

export default BookCard;
