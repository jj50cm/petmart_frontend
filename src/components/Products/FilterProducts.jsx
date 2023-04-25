import {
   Box,
   Divider,
   Flex,
   FormControl,
   FormLabel,
   Heading,
   Input,
   Link,
   Select,
   Text,
} from "@chakra-ui/react";
import React from "react";
import Searbar from "../Searbar";
import FilterForm from "../FilterForm";
import ColorBox from "../ColorBox";

const FilterProducts = () => {
   const filterCategory = [
      {
         name: "Địa chỉ",
         data: ["Tất cả", "Hà nội", "Bắc Ninh"],
      },
      {
         name: "Loại thú cưng",
         data: ["Tất cả", "Chó", "Mèo"],
      },
      {
         name: "Giống",
         data: ["Tất cả", "pitbull", "Mun"],
      },
      {
         name: "Tuổi",
         data: ["Tất cả", "6 tháng", "1 năm"],
      },
      {
         name: "Giới tính",
         data: ["Tất cả", "đực", "cái"],
      },
      {
         name: "Cân nặng",
         data: ["Tất cả", "2kg", "4kg"],
      },
   ];
   const colors = ["yellow", "black", "pink"];

   return (
      <Box flexBasis={"20%"} mr={"10px"} mb={{ sm: "10px" }}>
         <Flex flexDirection={"column"} gap={"16px"}>
            <Box>
               <Searbar />
            </Box>
            {filterCategory.map((category, index) => {
               return <FilterForm key={index} category={category} />;
            })}
            <Box>
               <Text fontSize={"md"} fontWeight={"medium"} mb={"6px"}>
                  Màu sắc
               </Text>
               <Flex pr={"12px"} alignItems={"center"}>
                  <Link color="teal.500">Tất cả</Link>
                  <Flex
                     justifyContent={"space-between"}
                     ml={"14px"}
                     gap={"10px"}
                  >
                     {colors &&
                        colors.map((color) => {
                           return <ColorBox key={color} color={color} />;
                        })}
                  </Flex>
               </Flex>
            </Box>
         </Flex>
      </Box>
   );
};

export default FilterProducts;
