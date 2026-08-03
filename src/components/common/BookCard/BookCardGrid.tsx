import {
  Box,
  Card,
  Image,
  Text,
  RatingGroup,
  IconButton,
  VStack,
  HStack,
  Button,
} from "@chakra-ui/react";
import type { BookGridType } from "../../../types/types";
import { BiHeart, BiSolidHeartSquare } from "react-icons/bi";
import { useState } from "react";
import { SlBasket } from "react-icons/sl";

interface BookCardGridProps {
  data: BookGridType;
}

function BookCardGrid({ data }: BookCardGridProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setisHovered] = useState(false);
  if (!data) return null;

  return (
    <Card.Root
      maxW="220px"
      overflow="hidden"
      border="none"
      bg="white"
      borderRadius="2xl"
      p="3"
      transition="all 0.3s ease"
      onMouseEnter={() => setisHovered(true)}
      onMouseLeave={() => setisHovered(false)}
      _hover={{
        transform: "translateY(-6px)",
        boxShadow: "1xl",
      }}
    >
      <Box position="relative" borderRadius="2xl" overflow="hidden">
        <Image
          src={data.imageUrl}
          alt={data.title}
          objectFit="cover"
          w="100%"
          h="280px"
        />
        <IconButton
          aria-label="Add to favorites"
          position="absolute"
          top="10px"
          right="10px"
          size="sm"
          borderRadius="lg"
          bg={isFavorite ? "purple.600" : "white"}
          color={isFavorite ? "white" : "purple.600"}
          _hover={{ bg: isFavorite ? "purple.600" : "gray.100" }}
          onClick={() => setIsFavorite(!isFavorite)}
        >
          {isFavorite ? (
            <BiSolidHeartSquare size="18px" />
          ) : (
            <BiHeart size="18px" />
          )}
        </IconButton>
      </Box>

      <Card.Body p="0" pt="3" gap="1" alignItems="center">
        <Card.Title fontSize="sm" fontWeight="bold" lineClamp={1}>
          {data.title}
        </Card.Title>

        {isHovered ? (
          <VStack wordSpacing={2} mt={2}>
            <HStack justifyContent="center" gap={2}>
              <Text fontSize="md" fontWeight="bold" color="purple.600">
                ${data.price || "54.78"}
              </Text>
              {data.oldPrice && (
                <Text
                  fontSize="xs"
                  color="Gray01"
                  textDecoration="line-through"
                >
                  ${data.oldPrice}
                </Text>
              )}
            </HStack>
            <Button size="lg" w="100%" colorPalette="purple" borderRadius="xl">
              <SlBasket /> Add to cart
            </Button>
          </VStack>
        ) : (
          <VStack wordSpacing={1} mt={1}>
            <Text color="Primary" fontSize="10px" fontWeight="bold">
              {Array.isArray(data.categories)
                ? data.categories.join(", ").toUpperCase()
                : data.categories}
            </Text>
            <RatingGroup.Root
              count={5}
              defaultValue={4}
              size="xs"
              colorPalette="orange"
            >
              <RatingGroup.HiddenInput />
              <RatingGroup.Control />
            </RatingGroup.Root>
          </VStack>
        )}
      </Card.Body>
    </Card.Root>
  );
}

export default BookCardGrid;
