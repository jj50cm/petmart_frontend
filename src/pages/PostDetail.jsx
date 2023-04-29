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
import ShowImages from "../components/ProductDetail/ShowImages.jsx";
import SubTitle from "../components/ProductDetail/SubTitle.jsx";
import RatingSystem from "../components/Rating/RatingSystem.jsx";
import { listItem } from "../data.js";
import ProductReviews from "../layouts/ProductReviews/ProductReviews.jsx";
import numberWithCommas from "../utils/numberWithCommas.js";

const PostDetail = () => {
   const { id } = useParams();
   const [pet, setPet] = useState(
      listItem.find((item) => parseInt(id) === item.id)
   );

   const { img, category, address, name, rating, author, gender, price } = pet;
   const views = 10;
   const numOfcomment = 4;
   const image = "./images/husky.jpg";

   useEffect(() => {
      // call api get single product
      console.log("detail");
   }, []);
   return (
      <Box width={"80%"} mx={"auto"} padding={8} my={"32px"}>
         <Flex justifyContent={"flex-end"} mb={"20px"}>
            <Button>Thêm vào danh sách yêu thích</Button>
         </Flex>
         <Flex gap={6}>
            <ShowImages />
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
         <Box my={"32px"}>
            <SubTitle>Thông tin chi tiết</SubTitle>
            <SimpleGrid columns={2} spacing={4}>
               <Text>
                  <Icon as={TfiRulerAlt} /> Kích thước: lớn
               </Text>
               <Text>
                  <Icon as={SiSourceforge} mr={"4px"} />
                  Giống thú cưng: Pitbull
               </Text>
               <Text>
                  <Icon as={BsShieldPlus} mr={"4px"} />
                  Tiêm phòng: có
               </Text>
               <Text>
                  <Icon as={MdPets} mr={"4px"} />
                  Độ tuổi: 6 tháng
               </Text>
            </SimpleGrid>
            <SubTitle>Đặc điểm nổi bật</SubTitle>
            <Text maxW={"90%"}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
               temporibus, tempora impedit recusandae eveniet consectetur
               possimus laborum officia ipsa, vero, aut quo ipsum? Quibusdam
               reprehenderit laboriosam aliquam sapiente commodi facere! Lorem
               ipsum dolor sit amet consectetur adipisicing elit. Placeat
               delectus optio quos id eligendi numquam commodi, quam quas
               doloremque dolorem?
            </Text>
            <Flex mt={"12px"} gap={3}>
               <Text fontWeight={"bold"}>Địa chỉ:</Text>
               <Text>Xuân Thủy Cầu giấy {address}</Text>
            </Flex>
         </Box>
         <ProductReviews />
      </Box>
   );
};

export default PostDetail;
