import { Box } from "@chakra-ui/react";
import React from "react";

const ColorBox = ({ color }) => {
   return (
      <Box
         borderRadius={"50%"}
         w={"20px"}
         h={"20px"}
         bg={color}
         cursor={"pointer"}
      ></Box>
   );
};

export default ColorBox;
