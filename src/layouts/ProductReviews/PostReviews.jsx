import { Box } from "@chakra-ui/react";
import React from "react";
import SubTitle from "../../components/PostDetail/SubTitle";
import PostRatingOverview from "./PostRatingOverview";
import PostRatingList from "./PostRatingList";

const PostReviews = () => {
  return (
    <Box>
      <SubTitle>Đánh giá sản phẩm</SubTitle>
      <PostRatingOverview />
      <PostRatingList />
    </Box>
  );
};

export default PostReviews;
