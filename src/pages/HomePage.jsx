import React from "react";
import Hero from "../layouts/Hero";
import { Box } from "@chakra-ui/react";

const HomePage = () => {
   return (
      <Box as="main" height={"calc(100vh - 84px)"}>
         <Hero />
      </Box>
   );
};

export default HomePage;
