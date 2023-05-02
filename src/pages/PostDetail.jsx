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
import React, { useEffect, useState } from "react";
import { BsShieldPlus } from "react-icons/bs";
import { MdOutlineReportGmailerrorred, MdPets } from "react-icons/md";
import { SiSourceforge } from "react-icons/si";
import { AiOutlineEye } from "react-icons/ai";
import { TfiRulerAlt } from "react-icons/tfi";
import { Link as ReactLink, useParams } from "react-router-dom";
import SubTitle from "../components/PostDetail/SubTitle.jsx";
import RatingSystem from "../components/Rating/RatingSystem.jsx";
import { listItem } from "../data.js";
import PostReviews from "../layouts/ProductReviews/PostReviews.jsx";
import numberWithCommas from "../utils/numberWithCommas.js";
import PostImages from "../components/PostDetail/PostImages.jsx";
import { useDispatch, useSelector } from "react-redux";
import PostInformation from "../layouts/ProductReviews/PostInformation.jsx";

const PostDetail = () => {
   const { id } = useParams();
   const [pet, setPet] = useState(
      listItem.find((item) => parseInt(id) === item.id)
   );
   const { userInfo } = useSelector((state) => state.user);

   const { img, category, address, name, rating, author, gender, price } = pet;
   const views = 10;
   const numOfcomment = 4;

   useEffect(() => {
      // call api get single product
      console.log("detail");
   }, []);
   return (
      <Box width={"80%"} mx={"auto"} padding={8} my={"32px"}>
         {userInfo && (
            <Flex justifyContent={"flex-end"} mb={"20px"}>
               <Button>Thêm vào danh sách yêu thích</Button>
            </Flex>
         )}
         <Flex gap={8}>
            <PostImages />
            <Box width={"48%"}>
               <Heading fontSize={"26px"} color={"#453227"}>
                  {name}
               </Heading>
               <Flex padding={"12px"} alignItems={"center"}>
                  <Flex height={"32px"} gap="10px" alignItems={"center"}>
                     <Flex>
                        <Text mr={"4px"} color={"pink.500"}>
                           {rating.toString()}
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
                     <Text>{views} lượt xem</Text>
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
                     <Icon as={MdOutlineReportGmailerrorred} boxSize={5}></Icon>
                  </Button>
               </Flex>
               <Heading color={"#ee4d2d"}>{numberWithCommas(price)}đ</Heading>
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
                        to={"/author"}
                        ml={"6px"}
                     >
                        {author}
                     </Link>
                  </Text>
               </Flex>

               <Flex justifyContent={"space-between"} color={"gray.600"}>
                  <Text>
                     {" "}
                     <Text as={"span"}>Loại thú cưng :</Text> {category}
                  </Text>
                  <Text>Giới tính: {gender}</Text>
               </Flex>
               <HStack mt={4} color={"gray.600"} fontSize={"15px"}>
                  <Icon as={AiOutlineEye} />
                  <Text> 12 lượt xem</Text>
               </HStack>
            </Box>
         </Flex>
         <PostInformation />
         <PostReviews />
      </Box>
   );
};

export default PostDetail;
