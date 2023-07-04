import React from "react";
import { Box, Flex, Spacer, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="gray.200" p={4}>
      <Flex
        align="center"
        maxW="1200px"
        m="0 auto"
        gap="20px"
      >
        <Link to="/">
          <Button variant="ghost" border="1px solid black">
            Home
          </Button>
        </Link>
        <Link to="/ticketListing">
          <Button variant="ghost" border="1px solid black">
            Ticket Listing
          </Button>
        </Link>
        <Link to="/ticketDetails">
          <Button variant="ghost" border="1px solid black">
            Ticket Details
          </Button>
        </Link>
        <Link to="/seatSelection">
          <Button variant="ghost" border="1px solid black">
            Seat Selection
          </Button>
        </Link>
        <Spacer />
        <Link to="/cart">
          <Button variant="ghost" border="1px solid black">
            Cart
          </Button>
        </Link>
        <Link to="/checkout">
          <Button variant="ghost" border="1px solid black">
            Checkout
          </Button>
        </Link>
        <Spacer />
        <Link to="/login">
          <Button variant="ghost" border="1px solid black">
            Login
          </Button>
        </Link>
        <Link to="/signup">
          <Button variant="ghost" border="1px solid black">
            SignUp
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
