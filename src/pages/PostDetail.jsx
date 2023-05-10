import {
   Box,
   Button,
   Divider,
   Flex,
   HStack,
   Heading,
   Icon,
   Link,
   SimpleGrid,
   Spacer,
   Text,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";
import { BsShieldPlus } from "react-icons/bs";
import { MdOutlineReportGmailerrorred, MdPets } from "react-icons/md";
import { SiSourceforge } from "react-icons/si";
import { AiOutlineEye } from "react-icons/ai";
import { TfiRulerAlt } from "react-icons/tfi";
import { Link as ReactLink, useParams, useNavigate } from "react-router-dom";
import SubTitle from "../components/PostDetail/SubTitle.jsx";
import RatingSystem from "../components/Rating/RatingSystem.jsx";
import { listItem } from "../data.js";
import PostReviews from "../layouts/ProductReviews/PostReviews.jsx";
import numberWithCommas from "../utils/numberWithCommas.js";
import PostImages from "../components/PostDetail/PostImages.jsx";
import { useDispatch, useSelector } from "react-redux";
import PostInformation from "../layouts/ProductReviews/PostInformation.jsx";
import { getPostById } from "../redux/actions/postActions.js";

const PostDetail = () => {
   const { id } = useParams();
   const navigate = useNavigate();

   const dispatch = useDispatch();
   const post = useSelector((state) => state.post);
   const user = useSelector((state) => state.user);
   const { userInfo } = user;

   const { loading, error, singlePost } = post;
   const views = 10;
   const numOfcomment = 4;

   useEffect(() => {
      dispatch(getPostById(id));
   }, []);
   let postInfo = null;
   let author = null;
   let images = [];
   if (singlePost) {
      postInfo = singlePost.post;
      images = postInfo.images;
      author = singlePost.creator;
      console.log(singlePost);
   }
   console.log(userInfo.user.id);
   console.log(author);
   console.log(postInfo);

   return (
      <>
         {loading && <Text>Loading...</Text>}
         {error && <Text>{error}</Text>}
         {!loading && postInfo && (
            <Box width={"80%"} mx={"auto"} padding={8} my={"32px"}>
               {userInfo && (
                  <Flex justifyContent={"flex-end"} mb={"20px"}>
                     <Button>Thêm vào danh sách yêu thích</Button>
                     {(userInfo.user.id === author.id) &&
                        <Button
                           ml={'10px'}
                           leftIcon={<EditIcon />}
                           colorScheme="teal"
                           variant={'outline'}
                           onClick={
                             () => navigate(`/posts/update/${postInfo.id}`)
                           }
                        >
                           Chỉnh sửa
                        </Button>
                     }
                  </Flex>
               )}
               <Flex gap={8}>
                  <PostImages images={images} />
                  <Box width={"48%"}>
                     <Heading fontSize={"26px"} color={"#453227"}>
                        {postInfo.title}
                     </Heading>
                     <Flex padding={"12px"} alignItems={"center"}>
                        <Flex height={"32px"} gap="10px" alignItems={"center"}>
                           <Flex>
                              <Text mr={"4px"} color={"pink.500"}>
                                 {postInfo.star.toString()}
                              </Text>
                              <RatingSystem rating={4} />
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
                           <Divider
                              orientation="vertical"
                              height={"20px"}
                              width={"1px"}
                              bgColor={"gray.500"}
                           />
                           <Text>{postInfo.views} lượt xem</Text>
                        </Flex>
                        <Spacer />
                        {/* Tố cáo */}
                        <Button
                           bgColor={"red.300"}
                           color={"white"}
                           _hover={{
                              backgroundColor: "red.200",
                           }}
                        >
                           <Icon
                              as={MdOutlineReportGmailerrorred}
                              boxSize={5}
                           ></Icon>
                        </Button>
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
                              to={`/author/${author.id}`}
                              ml={"6px"}
                           >
                              {author.username}
                           </Link>
                        </Text>
                     </Flex>

                     <Flex justifyContent={"space-between"} color={"gray.600"}>
                        <Text>
                           {" "}
                           <Text as={"span"}>Loại thú cưng :</Text>{" "}
                           {postInfo.species}
                        </Text>
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
