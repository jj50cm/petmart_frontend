import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import Footer from "./Footer";

const RootLayout = () => {
   return (
      <Flex
         flexDirection={"column"}
         minHeight={"100vh"}
         justifyContent={"space-between"}
      >
         <Header />
         <Outlet />
         <Footer />
      </Flex>
   );
};

export default RootLayout;
