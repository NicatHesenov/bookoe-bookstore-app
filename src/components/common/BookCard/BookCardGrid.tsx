import {
  Badge,
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

function BookCardOffer() {
  const data = {
    imageUrl: Book,
    imageAlt: "SECONDS [Part I]",
    beds: 3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ",
    catagory: ["BIOGRAPHY", "THRILLER", "HORROR"],
    title: "Kevin Smiley",
    rating: 4.5,
    price: "$435",
    oldPrice: 34,
    discont: "20%",
  };
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Box>
        <Image src={data.imageUrl} alt={data.imageAlt} objectFit="cover" />
      </Box>
      <Card.Body gap="3" p="4">
        <Card.Title>{data.imageAlt}</Card.Title>
        <HStack gap="2" wrap="wrap">
          {data.catagory.map((catagory, i) => (
            <Badge
              key={i}
              px="2"
              py="1"
              borderRadius="md"
              bgColor="PrimarySoft"
              color="Primary"
              fontSize="xs"
            >
              {catagory}
            </Badge>
          ))}
        </HStack>
        <Card.Description>{data.description}</Card.Description>
        <RatingGroup.Root count={5} defaultValue={4} colorPalette="orange">
          <RatingGroup.HiddenInput />
          <RatingGroup.Control />
        </RatingGroup.Root>
        <HStack fontSize="xs" color="gray.500" fontWeight="medium">
          {data.title}
        </HStack>
      </Card.Body>
      <Card.Footer px="4" justifyContent="space-between" alignItems="center">
        <Button bgColor="Primary" color="White">
          <SlBasket />
          Add to cart
        </Button>
        <HStack flexDirection="row" gap="2">
          <Text color="DarkPurple" fontSize="lg" fontWeight="bold">
            {data.price}
          </Text>
          {data.oldPrice && (
            <Text color="Grey01" textDecoration="line-through">
              ${data.oldPrice}
            </Text>
          )}
        </HStack>
      </Card.Footer>
    </Card.Root>
  );
}

export default BookCardOffer;
