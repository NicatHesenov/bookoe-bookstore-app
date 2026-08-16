import {
  Badge,
  Box,
  Card,
  HStack,
  Image,
  RatingGroup,
  Text,
  VStack,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { BiCartAlt, BiHeart } from "react-icons/bi";
import type { BookListType } from "../../../types/types";

interface BooklistOfferProps {
  data: BookListType;
}

function BookCardList({ data }: BooklistOfferProps) {
  if (!data) return null;

  return (
    <Card.Root
      flexDirection="row"
      overflow="hidden"
      maxW="4xl"
      p="4"
      borderRadius="2xl"
    >
      {/* Sol Şəkil */}
      <Image
        objectFit="cover"
        maxW="200px"
        borderRadius="xl"
        src={data?.imageUrl}
        alt={data?.title}
      />

      {/* Sağ Hissə: Məzmun Və Footer */}
      <VStack align="stretch" justify="space-between" flex="1" ml="6">
        {/* Card Body */}
        <Card.Body p="0">
          <VStack align="stretch" gap="3">
            {/* 1. Sətir: Başlıq (sol) və Reytinq (sağ) */}
            <HStack justify="space-between" align="flex-start">
              <VStack align="flex-start" gap="0">
                <Card.Title fontSize="2xl" fontWeight="bold">
                  {data.title}
                </Card.Title>
                <Text color="Primary" fontSize="xs" fontWeight="bold">
                  {Array.isArray(data.categories)
                    ? data.categories.join(", ").toUpperCase()
                    : data.categories}
                </Text>
              </VStack>

              <RatingGroup.Root
                count={5}
                defaultValue={data.rating || 4}
                size="xs"
                colorPalette="orange"
              >
                <RatingGroup.HiddenInput />
                <RatingGroup.Control />
              </RatingGroup.Root>
            </HStack>

            {/* 2. Sətir: Açıqlama mətni */}
            <Card.Description fontSize="sm" color="gray.600" lineClamp={3}>
              {data.description}
            </Card.Description>

            {/* 3. Sətir: Qiymət və Promolar */}
            <HStack gap="3" align="center" mt="2">
              <Text color="DarkPurple" fontSize="2xl" fontWeight="bold">
                ${data.price}
              </Text>
              {data.oldPrice && (
                <Text
                  color="Grey01"
                  fontSize="sm"
                  textDecoration="line-through"
                >
                  ${data.oldPrice}
                </Text>
              )}

              <HStack gap="2" wrap="wrap">
                {data?.promos?.map((promo, i) => (
                  <Badge
                    key={i}
                    px="3"
                    py="1"
                    borderRadius="full"
                    variant="outline"
                    colorPalette={i === 2 ? "gray" : "orange"}
                    fontSize="xs"
                  >
                    {promo}
                  </Badge>
                ))}
              </HStack>
            </HStack>
          </VStack>
        </Card.Body>

        {/* Card Footer: Müəllif Məlumatları və Düymələr */}
        <Card.Footer
          p="0"
          pt="4"
          justifyContent="space-between"
          alignItems="center"
        >
          <HStack gap="6">
            <Box>
              <Text fontSize="xs" color="gray.400">
                Written by
              </Text>
              <Text fontWeight="bold" fontSize="sm">
                {data.author}
              </Text>
            </Box>
            <Box>
              <Text fontSize="xs" color="gray.400">
                Publisher
              </Text>
              <Text fontWeight="bold" fontSize="sm">
                {data.publisher}
              </Text>
            </Box>
            <Box>
              <Text fontSize="xs" color="gray.400">
                Year
              </Text>
              <Text fontWeight="bold" fontSize="sm">
                {data.year}
              </Text>
            </Box>
          </HStack>

          <HStack gap="2">
            <Button colorPalette="purple" borderRadius="xl">
              <BiCartAlt /> Add to cart
            </Button>
            <IconButton
              variant="outline"
              borderRadius="xl"
              aria-label="Favorite"
            >
              <BiHeart />
            </IconButton>
          </HStack>
        </Card.Footer>
      </VStack>
    </Card.Root>
  );
}

export default BookCardList;
