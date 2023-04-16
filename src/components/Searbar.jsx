import { SearchIcon } from "@chakra-ui/icons";
import {
   HStack,
   Button,
   IconButton,
   FormControl,
   Input,
   Flex,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Searbar = () => {
   const [searchVal, setSearchVal] = useState("");

   const handleSearch = () => {
      console.log(searchVal);
   };

   return (
      <HStack>
         <Input
            bgColor={"gray.50"}
            borderRadius={"md"}
            width={"80%"}
            type="text"
            placeholder="Nhập tên thú nuôi"
            border={"none"}
            onChange={(e) => setSearchVal(e.target.value)}
         ></Input>
         {/* <IconButton
            colorScheme="blue"
            aria-label="Search database"
            icon={<SearchIcon />}
            onClick={handleSearch}
         /> */}
         {/* <Button colorScheme="teal">Tìm kiếm</Button> */}
      </HStack>
   );
};

export default Searbar;
