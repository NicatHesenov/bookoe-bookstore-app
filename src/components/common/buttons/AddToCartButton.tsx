import { Button } from "@chakra-ui/react";
import { SlBasket } from "react-icons/sl";

function AddToCartButton() {
  return (
    <Button size="md" colorPalette="purple" borderRadius="xl">
      <SlBasket /> Add to cart
    </Button>
  );
}

export default AddToCartButton;
