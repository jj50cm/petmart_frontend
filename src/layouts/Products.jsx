import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import FilterProducts from "../components/Products/FilterProducts";
import ProductList from "../components/Products/ProductList";

const Products = () => {
   return (
      <Box pt={"26px"} px={"12"}>
         <Heading
            as={"h3"}
            textAlign={"center"}
            color={"#453227"}
            mb={"34px"}
            fontStyle={"italic"}
         >
            Danh sách thú cưng
         </Heading>

         <Flex
            flexDirection={{
               base: "column",
               sm: "column",
               md: "row",
               lg: "row",
               xl: "row",
            }}
         >
            <FilterProducts />
            <ProductList />
         </Flex>
      </Box>
   );
};

export default Products;
