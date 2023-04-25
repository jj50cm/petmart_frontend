import React from "react";
import Hero from "../layouts/Hero";
import { Box } from "@chakra-ui/react";
import Products from "../layouts/Products";

const HomePage = () => {
   return (
      <Box as="main">
         <Hero />
         <Products />
      </Box>
   );
};

export default HomePage;
