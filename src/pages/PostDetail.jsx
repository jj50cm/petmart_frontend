import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Heading,
  Icon,
  Link,
  Spacer,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import { Link as ReactLink, useNavigate, useParams } from "react-router-dom";
import PostImages from "../components/PostDetail/PostImages.jsx";
import LikeButton from "../components/Posts/LikeButton.jsx";
import RatingSystem from "../components/Rating/RatingSystem.jsx";
import PostInformation from "../layouts/ProductReviews/PostInformation.jsx";
import PostReviews from "../layouts/ProductReviews/PostReviews.jsx";
import { getPostById } from "../redux/actions/postActions.js";
import numberWithCommas from "../utils/numberWithCommas.js";
import LoadingList from "../components/Admin/LoadingList.jsx";
import { EditIcon } from "@chakra-ui/icons";
import ReviewPost from "../components/ReviewPost/ReviewPost.jsx";

const PostDetail = () => {
  const [postInfo, setPostInfo] = useState(null);
  const [creator, setCreator] = useState(null);
  const { id } = useParams();
  const toast = useToast();

  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  const { loading, error, singlePost } = post;
  const user = useSelector((state) => state.user);
  const { userInfo } = user;
  const navigate = useNavigate();
  const numOfcomment = 4;

  useEffect(() => {
    dispatch(getPostById(id));
  }, []);

  useEffect(() => {
    // console.log(singlePost);
    if (singlePost) {
      console.log("new post");
      setPostInfo(singlePost.post);
      setCreator(singlePost.creator);
    }
  }, [singlePost]);
  useEffect(() => {
    if (error) {
      toast({
        description: error,
        status: "error",
        isClosable: true,
        position: "top",
      });
    }
  }, [error]);
  // console.log(singlePost);
  return (
    <>
      {loading && <LoadingList />}
      {error && <Heading textAlign={"center"}>{error}</Heading>}
      {!loading && postInfo && (
        <Box width={"80%"} mx={"auto"} padding={8} my={"32px"}>
          <Flex gap={8}>
            <PostImages images={postInfo.images} />
            <Box width={"48%"}>
              <Flex justifyContent={"space-between"}>
                <Heading fontSize={"32px"} color={"#453227"}>
                  {postInfo.title}
                </Heading>
                {/* Nếu user hiện tại là tác giả bài viết */}
                {userInfo && userInfo.user.id === creator.id && (
                  <Button
                    ml={"10px"}
                    leftIcon={<EditIcon />}
                    colorScheme="teal"
                    variant={"outline"}
                    onClick={() => navigate(`/posts/update/${postInfo.id}`)}
                  >
                    Chỉnh sửa
                  </Button>
                )}
              </Flex>
              <Flex padding={"12px"} alignItems={"center"}>
                <Flex height={"32px"} gap="10px" alignItems={"center"}>
                  <Flex>
                    <Text mr={"4px"} color={"pink.500"}>
                      {postInfo.star && postInfo.star.toString()}
                    </Text>
                    <RatingSystem rating={postInfo.star} />
                  </Flex>
                  <Divider
                    orientation="vertical"
                    height={"20px"}
                    width={"1px"}
                    bgColor={"gray.500"}
                  />
                  <Text>
                    {numOfcomment > 1
                      ? `${numOfcomment} comments`
                      : `${numOfcomment} comment`}
                  </Text>
                  {/* <Divider
                    orientation="vertical"
                    height={"20px"}
                    width={"1px"}
                    bgColor={"gray.500"}
                  /> */}
                  {/* <Text>{postInfo.views} lượt xem</Text> */}
                </Flex>
                <Spacer />
                {/* Yêu thích bài đăng */}
                {userInfo && <LikeButton postId={postInfo.id} />}
              </Flex>
              <Heading color={"#ee4d2d"}>
                {numberWithCommas(postInfo.price)}đ
              </Heading>
              <Flex my={6}>
                <Button
                  bgColor={"green"}
                  color={"white"}
                  _hover={{ backgroundColor: "green.400" }}
                >
                  Liên hệ với người bán
                </Button>
                <Spacer />
                <Text fontSize={"16px"}>
                  Tác giả:
                  <Link
                    color={"green.400"}
                    as={ReactLink}
                    to={`/author/${creator.id}`}
                    ml={"6px"}
                  >
                    {creator.username}
                  </Link>
                </Text>
              </Flex>

              <Flex justifyContent={"space-between"} color={"gray.600"}>
                <Text as={"span"}>Loại thú cưng : {postInfo.species}</Text>
                <Text as={"span"}>Số lượng : {postInfo.quantity} </Text>
              </Flex>
              <HStack mt={4} color={"gray.600"} fontSize={"15px"}>
                <Icon as={AiOutlineEye} />
                <Text> {postInfo.views} lượt xem</Text>
              </HStack>
            </Box>
          </Flex>
          <PostInformation postInfo={postInfo} />
          <PostReviews />
        </Box>
      )}
    </>
  );
};

export default PostDetail;
