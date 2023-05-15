import { Box, Button, Heading, Icon, useDisclosure } from "@chakra-ui/react";
import { MdOutlineRateReview } from "react-icons/md";
import React, { useEffect } from "react";
import { useState } from "react";
import ReviewForm from "./ReviewForm";
import { useDispatch, useSelector } from "react-redux";
import { setIsReview } from "../../redux/slices/post";

const ReviewPost = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // để trong redux
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  const user = useSelector((state) => state.user);
  const { loading, reviews, isReview } = post;
  const { userInfo } = user;
  function hasUserReviewed(reviews, userId) {
    // Check if any review in the array was submitted by the user
    let hasReviewed = reviews.some((review) => review.creator.id === userId);

    // Return a boolean indicating whether the user has reviewed or not
    return hasReviewed;
  }
  useEffect(() => {
    if (reviews) {
      const checkReview = hasUserReviewed(reviews, userInfo.user.id);
      dispatch(setIsReview(checkReview));
    }
  }, [reviews]);
  return (
    <Box mt={5}>
      <Button
        onClick={onOpen}
        isDisabled={isReview}
        leftIcon={<Icon as={MdOutlineRateReview} />}
        bgColor={"green.500"}
        color={"#fff"}
        _hover={{
          bgColor: "blue.400",
        }}
      >
        {isReview ? "Bạn đã đánh giá" : "Đánh giá"}
      </Button>
      <ReviewForm isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default ReviewPost;
