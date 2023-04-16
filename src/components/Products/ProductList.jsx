import { Box, SimpleGrid } from "@chakra-ui/react";
import React, { useState } from "react";
import SortProducts from "./SortProducts";
import ProductItem from "./ProductItem";
import { listItem } from "../../data.js";
import { Grid, GridItem } from "@chakra-ui/react";
import Pagination from "./Pagination";

const ProductList = () => {
   const [currentPage, setCurrentPage] = useState(1);
   const totalPages = 10; // Example total number of pages

   const handlePageChange = (newPage) => {
      if (newPage < 1) {
         newPage = 1; // Set page to 1 if newPage is negative
      } else if (newPage > totalPages) {
         newPage = totalPages; // Set page to last page if newPage is greater than total pages
      }
      setCurrentPage(newPage);
   };
   return (
      <Box flexBasis={"80%"}>
         <SortProducts></SortProducts>
         <Grid
            templateColumns={{
               base: "repeat(1, 1fr)",
               sm: "repeat(2, 1fr)",
               md: "repeat(3, 1fr)",
               lg: "repeat(4, 1fr)",
            }}
            gap={1}
         >
            {listItem.map((item) => {
               return (
                  <GridItem key={item.id}>
                     <ProductItem item={item} />
                  </GridItem>
               );
            })}
         </Grid>
         <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
         />
      </Box>
   );
};

export default ProductList;
