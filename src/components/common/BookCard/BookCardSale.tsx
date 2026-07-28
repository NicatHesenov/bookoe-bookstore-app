import { Badge, Box, Card, HStack, Image, Text, Icon } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import type { BookSaleType } from "../../../types/types";

interface BookCardSaleProps {
  data: BookSaleType;
}

function BookCardSale({ data }: BookCardSaleProps) {
  if (!data) return null;

  return (
    <Card.Root maxW="220px" overflow="hidden" border="none" bg="transparent">
      <Box position="relative" borderRadius="2xl" overflow="hidden">
        <Image
          src={data.imageUrl}
          alt={data.title}
          objectFit="cover"
          w="100%"
          h="280px"
        />

        <Badge
          position="absolute"
          top="20px"
          left="0"
          color="white"
          bg="Orange"
          borderRightRadius="2xl"
          px="3"
          py="1"
          fontSize="xs"
          fontWeight="bold"
        >
          {data.discont}
        </Badge>
      </Box>

      <Card.Body p="0" pt="3" gap="1">
        <Card.Title fontSize="sm" fontWeight="bold" lineClamp={1}>
          {data.title}
        </Card.Title>
        <Text color="Primary" fontSize="xs" fontWeight="medium">
          {Array.isArray(data.categories)
            ? data.categories.join(", ")
            : data.categories}
        </Text>
      </Card.Body>

      <Card.Footer
        p="0"
        pt="2"
        justifyContent="space-between"
        alignItems="center"
      >
        <HStack gap="1" alignItems="center">
          <Icon as={FaStar} color="Orange" boxSize="3.5" />
          <Text fontSize="xs" fontWeight="bold" color="Orange">
            {data.rating || "4.7"}
          </Text>
        </HStack>

        <HStack gap="1.5" alignItems="center">
          <Text color="DarkPurple" fontSize="sm" fontWeight="bold">
            {data.price}
          </Text>
          {data.oldPrice && (
            <Text color="Grey01" fontSize="xs" textDecoration="line-through">
              {data.oldPrice.toString().startsWith("$")
                ? data.oldPrice
                : `$${data.oldPrice}`}
            </Text>
          )}
        </HStack>
      </Card.Footer>
    </Card.Root>
  );
}

export default BookCardSale;
