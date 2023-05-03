import React from "react";
import Hero from "../layouts/Hero";
import { Box } from "@chakra-ui/react";
import Posts from "../layouts/Posts";

const HomePage = () => {
   return (
      <Box as="main">
         <Hero />
         <Posts />
      </Box>
   );
};

export default HomePage;
