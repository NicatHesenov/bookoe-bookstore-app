import {
  Badge,
  Box,
  Card,
  Heading,
  HStack,
  Image,
  RatingGroup,
  Text,
  VStack,
} from "@chakra-ui/react";
import type { BookListType } from "../../../types/types";
import AddToCartButton from "../buttons/AddToCartButton";
import Favoriteİcon from "../buttons/Favoriteİcon";
interface BooklistOfferProps {
  data: BookListType;
}
function BookCardList({ data }: BooklistOfferProps) {
  return (
    <Card.Root
      marginTop="10px"
      maxW="900px"
      maxH="320px"
      flexDirection="row"
      borderRadius="14px"
      overflow="hidden"
      p="4"
    >
      <Image
        src={data?.imageUrl}
        alt={data?.title}
        maxW="229px"
        borderRadius="20px"
        objectFit="cover"
        justifyContent="center"
        alignItems="center"
      />
      <VStack
        alignItems="stretch"
        justifyContent="space-between"
        flex="1"
        ml="6"
      >
        <Card.Body p="0">
          <VStack align="stretch" gap="3">
            <HStack justify="space-between" align="flex-start">
              <VStack align="flex-start" gap="0.5">
                <Heading fontSize="1xl" fontWeight="bold">
                  {data.title}
                </Heading>
                <Text color="Primary" fontSize="0.7rem" ml="0.5">
                  {Array.isArray(data.categories)
                    ? data.categories.join(", ").toUpperCase()
                    : data.categories}
                </Text>
              </VStack>
              <VStack>
                <RatingGroup.Root
                  count={5}
                  defaultValue={4}
                  size="lg"
                  colorPalette="orange"
                >
                  <RatingGroup.HiddenInput />
                  <RatingGroup.Control />
                </RatingGroup.Root>

                <HStack fontSize="12px" align="center">
                  <Text fontSize="20px">{data.rating}</Text>
                  <Text color="Grey01">{data.reviewsCount} Reviews</Text>
                </HStack>
              </VStack>
            </HStack>
            <Text fontSize="0.9rem">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.{" "}
            </Text>
            <HStack gap="10" align="center" mt="2">
              <HStack>
                <Text color="DarkPurple" fontSize="2xl" fontWeight="bold">
                  ${data.price}
                </Text>
                <Text
                  color="Grey01"
                  textDecoration="line-through"
                  fontSize="sm"
                >
                  ${data.oldPrice}
                </Text>
              </HStack>
              <HStack gap="3">
                {data?.promos?.map((promo, i) => (
                  <Badge
                    key={i}
                    p="5px 20px"
                    fontSize="11px"
                    borderRadius="full"
                    variant="outline"
                    colorPalette={i === 2 ? "gray" : "orange"}
                    backgroundColor={i === 2 ? "gray.300" : ""}
                  >
                    {promo}
                  </Badge>
                ))}
              </HStack>
            </HStack>
          </VStack>
        </Card.Body>
        <Card.Footer
          p="0"
          pt="4"
          justifyContent="space-between"
          alignItems="center"
        >
          <HStack gap="6">
            <Box>
              <Text fontSize="xs" color="Grey01">
                Written by
              </Text>
              <Text fontWeight="bold" fontSize="sm">
                {data.author}
              </Text>
            </Box>
            <Box>
              <Text fontSize="xs" color="Grey01">
                Publisher
              </Text>
              <Text fontWeight="bold" fontSize="sm">
                {data.publisher}
              </Text>
            </Box>
            <Box>
              <Text fontSize="xs" color="Grey01">
                Year
              </Text>
              <Text fontWeight="bold" fontSize="sm">
                {data.year}
              </Text>
            </Box>
          </HStack>
          <HStack>
            <AddToCartButton />

            <Favoriteİcon />
          </HStack>
          {/* Hazırdı digərinə keçəcəm */}
        </Card.Footer>
      </VStack>
    </Card.Root>
  );
}

export default BookCardList;
