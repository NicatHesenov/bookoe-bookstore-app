import {
  Badge,
  Box,
  Button,
  Card,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { SlBasket } from "react-icons/sl";
import type { BookOfferType } from "../../../types/types";

interface BookCardOfferProps {
  data: BookOfferType;
}
function BookCardOffer({ data }: BookCardOfferProps) {
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Box>
        <Image src={data?.imageUrl} alt={data?.title} objectFit="cover" />
      </Box>
      <Card.Body gap="3" p="4">
        <Card.Title>{data?.title}</Card.Title>
        <HStack gap="2" wrap="wrap">
          {data?.categories?.map((catagory, i) => (
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
        <Card.Description>{data?.description}</Card.Description>

        <Text fontSize="xs" color="gray.500" fontWeight="medium">
          {data?.author}
        </Text>
      </Card.Body>
      <Card.Footer px="4" justifyContent="space-between" alignItems="center">
        <Button bgColor="Primary" color="White">
          <SlBasket />
          Add to cart
        </Button>
        <HStack flexDirection="row" gap="2">
          <Text color="DarkPurple" fontSize="lg" fontWeight="bold">
            {data?.price}
          </Text>
          {data?.oldPrice && (
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
