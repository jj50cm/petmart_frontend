import { Box, Heading, Image, Button, Text } from "@chakra-ui/react";
import React from "react";

const Hero = () => {
   const heroContainerStyle = {
      position: "absolute",
      top: "30%",
      left: "10%",
   };
   return (
      <Box
         height={"100%"}
         bgImage="url('./images/slide-2.png')"
         bgPosition="center"
         bgSize={"cover"}
         bgRepeat="no-repeat"
         position={"relative"}
      >
         <Box position={"absolute"} top={"25%"} left={"6%"}>
            <Heading color={"#253D4E"} as={"h1"} fontSize={"46px"} pb={"24px"}>
               Chào mừng bạn đến với Pets Shop!
            </Heading>
            <Text
               maxW={"650px"}
               pb={"32px"}
               fontSize={"18px"}
               color={"#787878"}
            >
               Website chuyên MUA BÁN VẬT NUÔI, THÚ CƯNG tốt nhất trên thị
               trường libero repellendus sed, beatae, necessitatibus nihil quos
               atque quasi. Lorem ipsum dolor sit amet consectetur adipisicing
               elit. Sequi, itaque!
            </Text>
            <Button
               rounded={"lg"}
               _hover={{ bg: "black" }}
               color={"white"}
               bg={"#f5897e"}
               fontSize={"18px"}
               transition={"all .5s"}
            >
               Bắt đầu mua sắm
            </Button>
         </Box>
      </Box>
   );
};

export default Hero;
