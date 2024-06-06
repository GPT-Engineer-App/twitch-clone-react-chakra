import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Box bg="blue.500" p={4} display={{ base: "block", md: "flex" }} justifyContent="center">
      <Button as={Link} to="/" colorScheme="teal" variant="solid">
        Home
      </Button>
    </Box>
  );
}

export default Navigation;
