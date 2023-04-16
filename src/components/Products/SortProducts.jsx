import {
   Box,
   Divider,
   Flex,
   FormLabel,
   HStack,
   Select,
   Text,
} from "@chakra-ui/react";
import React from "react";
import TotalProduct from "../TotalProduct";

const SortProducts = () => {
   const sortBy = [
      { text: "Giá (tăng dần)", value: "lowest" },
      { text: "Giá (giảm dần)", value: "highest" },
      { text: "Tên (A - Z)", value: "az" },
      { text: "Tên (Z - A)", value: "za" },
   ];
   return (
      <Flex alignItems={"center"} justifyContent={"space-between"} mb={"10px"}>
         <TotalProduct />
         <Divider
            orientation="horizontal"
            borderColor="gray.500"
            flexBasis={{ base: "20%", sm: "40%", md: "50%", lg: "68%" }}
         />
         <Box flexBasis={{ base: "40%", sm: "30%", md: "30%", lg: "15%" }}>
            <Select placeholder="">
               {sortBy &&
                  sortBy.map((item) => {
                     return (
                        <option key={item.value} value={item.value}>
                           {item.text}
                        </option>
                     );
                  })}
            </Select>
         </Box>
      </Flex>
   );
};

export default SortProducts;
