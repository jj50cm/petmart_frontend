import { HStack, Text, Tooltip } from "@chakra-ui/react";
import React from "react";

const MenuOptionItem = ({ children, text }) => {
   const hoverStyle = {
      ":hover": {
         color: "blue.500",
      },
   };
   return (
      <HStack cursor={"pointer"} sx={hoverStyle}>
         {children}
         <Text>{text}</Text>
      </HStack>
   );
};

export default MenuOptionItem;
