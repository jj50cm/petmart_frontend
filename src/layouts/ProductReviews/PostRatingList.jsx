import { Heading, Stack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import PostComment from "../../components/PostDetail/PostComment";
import { useDispatch, useSelector } from "react-redux";
import { getReviews } from "../../redux/actions/postActions";

const PostRatingList = () => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  const user = useSelector((state) => state.user);
  const { loading, isReview, showReviewList } = post;

  useEffect(() => {
    dispatch(getReviews());
  }, [isReview]);
  useEffect(() => {
    if (showReviewList.length > 0) {
      console.log("showReviewLis", showReviewList);
    }
  }, [showReviewList]);

  return (
    <Stack mt={5} minHeight={"400px"}>
      {loading && <Heading>Loading...</Heading>}
      {showReviewList &&
        showReviewList.map((review) => {
          return <PostComment key={review.id} review={review}></PostComment>;
        })}
      {showReviewList && showReviewList.length <= 0 && (
        <Heading textAlign={"center"} fontSize={"lg"}>
          Chưa có đánh giá nào.
        </Heading>
      )}
    </Stack>
  );
};

export default PostRatingList;
