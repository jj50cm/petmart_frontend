import { Box } from "@chakra-ui/react";
import React from "react";
import SubTitle from "../../components/ProductDetail/SubTitle";
import ProductRatingOverview from "./ProductRatingOverview";
import ProductRatingList from "./ProductRatingList";

const ProductReviews = () => {
   return (
      <Box>
         <SubTitle>Đánh giá sản phẩm</SubTitle>
         <ProductRatingOverview />
         <ProductRatingList />
      </Box>
   );
};

export default ProductReviews;
