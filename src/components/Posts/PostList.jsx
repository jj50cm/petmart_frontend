import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import SortPosts from "./SortPosts";
import SinglePost from "./SinglePost";
import { listItem } from "../../data.js";
import { Grid, GridItem } from "@chakra-ui/react";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../redux/actions/postActions";

const PostList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  const { loading, error, showPostList } = post;
  const totalPages = 10; // Example total number of pages
  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

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
      <SortPosts></SortPosts>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={1}
      >
        {loading && <Heading>Loading...</Heading>}
        {error && <Heading>{error}</Heading>}
        {showPostList &&
          showPostList.length > 0 &&
          showPostList.map((post) => {
            return (
              <GridItem key={post.id}>
                <SinglePost post={post} />
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

export default PostList;
