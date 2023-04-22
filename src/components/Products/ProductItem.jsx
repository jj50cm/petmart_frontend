import {
   Box,
   Button,
   Card,
   CardBody,
   CardFooter,
   Divider,
   Flex,
   HStack,
   Heading,
   Icon,
   Image,
   Link,
   Spacer,
   Text,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import RatingSystem from "../Rating/RatingSystem";

function ProductItem({ item }) {
   const { id, img, category, address, name, rating, author, gender, price } =
      item;
   // console.log(item);
   const numberWithCommas = (num) => {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
   };

   return (
      <Card maxW="xs">
         <CardBody>
            <Link>
               <Image
                  height={"200px"}
                  width={"100%"}
                  objectFit={"cover"}
                  src={img}
                  alt="image"
                  rounded={"md"}
               ></Image>
            </Link>
            <Flex
               justifyContent={"space-between"}
               mt={"4px"}
               color={"gray.500"}
            >
               <Text>{category}</Text>
               <HStack>
                  <Icon as={CiLocationOn}></Icon>
                  <Text>{address}</Text>
               </HStack>
            </Flex>
            <Heading
               as={"h6"}
               fontSize={"17px"}
               mt={"16px"}
               cursor={"pointer"}
               transition={"color .3s"}
               _hover={{
                  color: "green.500",
               }}
            >
               {name}
            </Heading>
            <HStack color={"gray.500"}>
               <Text>By</Text>
               <Text color={"green.400"}>{author}</Text>
            </HStack>

            <Flex color={"gray.500"} alignItems={"center"} mt={"6px"}>
               <Box>
                  <RatingSystem rating={rating} />
               </Box>
               <Spacer />
               <Box
                  fontSize={{
                     base: "12px",
                     sm: "12px",
                     md: "12px",
                     lg: "14px",
                  }}
               >
                  Giống {gender}
               </Box>
            </Flex>
         </CardBody>
         <Divider color={"gray.300"} />
         <CardFooter justify="space-between" alignItems={"center"} p={"12px"}>
            <Text color={"green.400"} fontWeight={"700"} fontSize={"lg"}>
               {numberWithCommas(price)}
            </Text>
            <Button
               leftIcon={<Icon as={AiOutlineShoppingCart} boxSize={5}></Icon>}
               bgColor={"green.100"}
               color={"green.400"}
               variant="outline"
               fontSize={"md"}
               _hover={{
                  background: "green.500",
                  color: "white",
                  transform: "translateY(-2px)",
               }}
            >
               Add
            </Button>
         </CardFooter>
      </Card>
   );
}

export default ProductItem;
