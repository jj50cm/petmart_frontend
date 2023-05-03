import {
   Box,
   Container,
   Flex,
   Image,
   Spacer,
   useToast,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Account from "../components/Header/Account";
import MenuOptions from "../components/Header/MenuOptions";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../redux/slices/user";

const Header = () => {
   const user = useSelector((state) => state.user);
   const { userInfo } = user;
   if (userInfo) {
      // console.log(userInfo);
   }
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

               <Spacer />
               <Flex
                  flexBasis={"54%"}
                  justifyContent={"flex-end"}
                  color={"#7E7E7E"}
               >
                  {/* nếu user chưa login thì ko hiện options */}
                  {userInfo && (
                     <>
                        <MenuOptions />
                        <Spacer />
                     </>
                  )}
                  <Account />
               </Flex>
            </Flex>
         </Container>
      </Box>
   );
};

export default Header;
