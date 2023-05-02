import { Avatar, Box, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";
import RatingSystem from "../Rating/RatingSystem";

const PostComment = () => {
   return (
      <Box>
         <Flex paddingBottom={3}>
            <Avatar boxSize={9} />
            <Box ml={4}>
               <Text>nguyen van a</Text>
               <RatingSystem rating={4} />
               <Text as="span" fontSize={"14px"} color={"gray.500"} mb={"10px"}>
                  2022-12-09 18:25
               </Text>
               <Text maxWidth={"82%"} mt={2}>
                  Chất lượng sản phẩm: ok Đúng với mô tả: đúng với mô tả dùng
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt officiis totam ea, provident laborum ipsum optio
                  harum exercitationem ipsa distinctio?
               </Text>
            </Box>
         </Flex>
         <Divider />
      </Box>
   );
};

export default PostComment;
