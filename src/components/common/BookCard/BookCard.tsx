import {
  Box,
  Button,
  Card,
  HStack,
  Image,
  RatingGroup,
  Text,
} from "@chakra-ui/react";
import Book from "../../../assets/images/book.jpeg";
import { SlBasket } from "react-icons/sl";
interface BookCardProps {
  viewType?: "grid" | "list";
}
function BookCard({ viewType = "grid" }: BookCardProps) {
  const isList = viewType === "list";
  const data = {
    imageUrl: Book,
    imageAlt: "Thunder Stunt",
    beds: 3,
    // title: "Modern home in city center in the heart of historic Los Angeles",
    catagory: "ADVANTURE, SCIENCE, COMEDY",
    rating: 4.5,
    price: "$435",
    oldPrice: 34,
    discont: "20%",
  };
  return (
    <Card.Root
      maxW="sm"
      overflow="hidden"
      flexDirection={isList ? "row" : "column"}
    >
      <Box width="100%">
        <Image
          src={data.imageUrl}
          alt={data.imageAlt}
          objectFit="cover"
          borderRadius="md"
        />
      </Box>
      <Card.Body gap="2">
        <Card.Title>Thunder Stunt</Card.Title>
        <Card.Description color="Primary">{data.catagory}</Card.Description>
        <RatingGroup.Root
          count={5}
          defaultValue={4}
          size="sm"
          colorPalette="red"
        >
          <RatingGroup.HiddenInput />
          <RatingGroup.Control />
        </RatingGroup.Root>
      </Card.Body>
      <Card.Footer
        flexDirection="row-reverse"
        justifyContent="space-between"
        alignItems="center"
      >
        <HStack flexDirection="row">
          <Text color="DarkPurple">{data.price}</Text>
          {data.oldPrice && (
            <Text color="Grey01" textDecoration="line-through">
              ${data.oldPrice}
            </Text>
          )}
        </HStack>
        <Button bgColor="Primary" color="White">
          <SlBasket />
          Add to cart
        </Button>
      </Card.Footer>
    </Card.Root>
  );
}

export default BookCard;
