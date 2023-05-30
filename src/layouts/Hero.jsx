import { Box, Heading, Image, Button, Text } from "@chakra-ui/react";
import React from "react";

const Hero = () => {
  return (
    <Box
      height={"calc(100vh - 84px)"}
      bgImage="url('./images/slide-2.png')"
      bgPosition="center"
      bgSize={"cover"}
      bgRepeat="no-repeat"
      position={"relative"}
    >
      <Box position={"absolute"} top={"25%"} left={"6%"}>
        <Heading
          color={"#253D4E"}
          as={"h1"}
          fontSize={{ base: "22px", md: "32px", lg: "48px" }}
          pb={{ base: "4px", md: "24px" }}
        >
          Chào mừng bạn đến với Pethub!
        </Heading>
        <Text
          maxW={{ base: "380px", md: "580px", lg: "650px" }}
          pb={"32px"}
          fontSize={{ base: "10px", md: "14px", lg: "18px" }}
          color={"#787878"}
        >
          Website chuyên MUA BÁN VẬT NUÔI, THÚ CƯNG tốt nhất trên thị trường.
          Đây là một trang web thương mại điện tử cung cấp các dịch vụ mua bán
          các loại vật nuôi, đặc biệt là các loại thú cưng như chó, mèo, chim
          cảnh, cá cảnh, v.v.
        </Text>
        <Button
          rounded={"lg"}
          _hover={{ bg: "black" }}
          color={"white"}
          bg={"#f5897e"}
          fontSize={{ base: "12px", md: "18px" }}
          transition={"all .5s"}
        >
          Bắt đầu mua sắm
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
