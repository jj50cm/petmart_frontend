import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";

const RootLayout = () => {
   return (
      <Box h={"100vh"}>
         <Header />
         <Outlet />
      </Box>
   );
};

export default RootLayout;
