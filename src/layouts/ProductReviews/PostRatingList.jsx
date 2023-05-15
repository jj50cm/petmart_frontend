import { Heading, Stack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import PostComment from "../../components/PostDetail/PostComment";
import { useDispatch, useSelector } from "react-redux";
import { getReviews } from "../../redux/actions/postActions";

const PostRatingList = () => {
  const comments = [1];
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  const user = useSelector((state) => state.user);
  const { loading, reviews, isReview } = post;

  useEffect(() => {
    dispatch(getReviews());
  }, [isReview]);

  return (
    <Stack mt={5}>
      {loading && <Heading>Loading...</Heading>}
      {reviews &&
        reviews.map((review) => {
          return <PostComment key={review.id} review={review}></PostComment>;
        })}
    </Stack>
  );
};

export default PostRatingList;
