import {
   Box,
   Container,
   Flex,
   HStack,
   Icon,
   Image,
   Spacer,
   Text,
   Tooltip,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiHeart } from "react-icons/bi";
import Account from "../components/Account";
import { Link } from "react-router-dom";

const Header = () => {
   const hoverStyle = {
      ":hover": {
         color: "black",
      },
   };
   return (
      <Box as={"header"}>
         <Container maxW={"container.xl"}>
            <Flex
               py={"22px"}
               px={"30px"}
               width={"100%"}
               flexWrap={"none"}
               justifyContent={"space-between"}
               alignItems={"center"}
            >
               <Box _hover={{ cursor: "pointer" }}>
                  <Link to={"/"}>
                     <Image src={"./images/logo-petshop.jpg"} />
                  </Link>
               </Box>
               {/* <Box flexBasis={"35%"}>
                  <Searbar />
               </Box> */}
               <Spacer />
               <Flex
                  flexBasis={"30%"}
                  justifyContent={"space-between"}
                  color={"#7E7E7E"}
               >
                  <HStack cursor={"pointer"} sx={hoverStyle}>
                     <Icon boxSize={7} as={BiHeart} />
                     <Tooltip
                        label="Danh sách yêu thích"
                        bg={"#7E7E7E"}
                        fontSize="sm"
                     >
                        <Text>Wishlist</Text>
                     </Tooltip>
                  </HStack>
                  <HStack cursor={"pointer"} sx={hoverStyle}>
                     <Icon boxSize={7} as={AiOutlineShoppingCart} />
                     <Tooltip label="Giỏ hàng" bg={"#7E7E7E"} fontSize="sm">
                        <Text>Cart</Text>
                     </Tooltip>
                  </HStack>
                  {/* <HStack cursor={"pointer"} sx={hoverStyle}>
                     <Icon boxSize={7} as={VscAccount} />
                     <Text>Account</Text>
                  </HStack> */}
                  <Account />
               </Flex>
            </Flex>
         </Container>
      </Box>
   );
};

export default Header;
