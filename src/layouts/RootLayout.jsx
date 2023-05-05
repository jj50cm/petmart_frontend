import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Box, Flex, Grid } from "@chakra-ui/react";
import Footer from "./Footer";

const RootLayout = () => {
   return (
      <Grid
         // flexDirection={"column"}
         minHeight={"100vh"}
         // justifyContent={"space-between"}
         templateRows={"auto 1fr auto"}
      >
         <Header />
         <Outlet />
         <Footer />
      </Grid>
   );
};

export default RootLayout;
