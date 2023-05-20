import { Avatar, Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import RatingSystem from "../Rating/RatingSystem";
import { formatDate } from "../../utils/formatDate";

const PostComment = ({ review }) => {
  return (
    <>
      {review ? (
        <Box>
          <Flex paddingBottom={3}>
            <Avatar boxSize={9} />
            <Box ml={4}>
              <Text>{review.creator.username}</Text>
              <RatingSystem rating={review.rating} />
              <Text as="span" fontSize={"14px"} color={"gray.500"} mb={"10px"}>
                {formatDate(review.createdAt)}
              </Text>
              <Text mt={2}>{review.message}</Text>
            </Box>
          </Flex>
          <Divider />
        </Box>
      ) : (
        <Heading>No review.</Heading>
      )}
    </>
  );
};

export default PostComment;
