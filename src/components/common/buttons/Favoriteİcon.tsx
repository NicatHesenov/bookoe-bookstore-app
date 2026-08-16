import { IconButton } from "@chakra-ui/react";
import { BiHeart } from "react-icons/bi";

function Favoriteİcon() {
  return (
    <IconButton variant="outline" borderRadius="xl" aria-label="Favorite">
      <BiHeart />
    </IconButton>
  );
}

export default Favoriteİcon;
