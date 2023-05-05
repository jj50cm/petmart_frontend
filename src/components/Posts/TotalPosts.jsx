import { Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const TotalPosts = () => {
   const post = useSelector((state) => state.post);
   const { postList } = post;

   return <Text>{postList && postList.postsCount || 0} sản phẩm</Text>;
};

export default TotalPosts;
