import { Container } from "@chakra-ui/react";
// import BookCard from "../components/common/BookCard/BookCard";
import BookCardOffer from "../components/common/BookCard/BookCardOffer";
// import Test from "../component/SONRASİLECEM/Test";
import { mockOfferBooks } from "../data/mockOfferBooks";
function Mainlayout() {
  return (
    <Container>
      {/* <Navbar />
      <Test /> */}
      <BookCardOffer data={mockOfferBooks[0]} />
    </Container>
  );
}

export default Mainlayout;
