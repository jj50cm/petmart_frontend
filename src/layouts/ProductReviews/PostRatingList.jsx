import { Stack } from "@chakra-ui/react";
import React from "react";
import PostComment from "../../components/PostDetail/PostComment";

const PostRatingList = () => {
  const comments = [1];
  return (
    <Stack mt={5}>
      {comments.map((comment) => {
        return <PostComment key={comment}></PostComment>;
      })}
    </Stack>
  );
};

export default PostRatingList;
