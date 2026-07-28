import { Container } from "@chakra-ui/react";
// import BookCard from "../components/common/BookCard/BookCard";
// import BookCardOffer from "../components/common/BookCard/BookCardOffer";
// import { mockOfferBooks } from "../data/data";
import { mockSaleBooks } from "../data/data";
import BookCardSale from "../components/common/BookCard/BookCardSale";
function Mainlayout() {
  return (
    <Container>
      {/* <Navbar />
      <Test /> */}
      {/* <BookCardOffer data={mockOfferBooks[0]} /> */}
      <BookCardSale data={mockSaleBooks[0]} />
    </Container>
  );
}

export default Mainlayout;
