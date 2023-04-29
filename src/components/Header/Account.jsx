import {
   Menu,
   MenuButton,
   HStack,
   MenuItem,
   MenuList,
   Portal,
   Text,
   Link,
   useToast,
   Button,
   Avatar,
   AvatarBadge,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { VscAccount } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { Link as ReactLink, useNavigate } from "react-router-dom";
import { userLogout } from "../../redux/slices/user";
import { logout } from "../../redux/actions/userActions";
const accountAnonymousLinks = [
   { text: "Đăng nhập", path: "/login" },
   { text: "Đăng ký", path: "/register" },
];
const accounLoggedIntLinks = [
   { text: "Thông tin người dùng", path: "/profile" },
   { text: "Đăng xuất", path: "/" },
];

const Account = () => {
   const { userInfo } = useSelector((state) => state.user);
   const dispatch = useDispatch();
   const toast = useToast();
   const navigate = useNavigate();

   let showOptions = accountAnonymousLinks;
   if (userInfo) {
      showOptions = accounLoggedIntLinks;
   }

   const logoutHandler = () => {
      dispatch(logout());
      // console.log("đăng xuất");
      toast({
         description: "Bạn đã đăng xuất thành công",
         status: "success",
         isClosable: true,
         position: "top",
      });
   };

   const handleClick = (link) => {
      if (link.text === "Đăng xuất") {
         logoutHandler();
      } else {
         navigate(link.path);
      }
   };

   return (
      <Menu>
         <MenuButton>
            <HStack>
               <Avatar boxSize={8}>
                  {userInfo && <AvatarBadge boxSize="18px" bg="green.500" />}
               </Avatar>
               <Text>{userInfo ? userInfo.user.username : "Tài khoản"}</Text>
            </HStack>
         </MenuButton>
         <Portal>
            <MenuList>
               {/* nếu chưa log in */}
               {!userInfo &&
                  accountAnonymousLinks.map((link) => {
                     return (
                        <MenuItem
                           key={link.text}
                           onClick={() => handleClick(link)}
                        >
                           {link.text}
                        </MenuItem>
                     );
                  })}
               {userInfo &&
                  accounLoggedIntLinks.map((link) => {
                     return (
                        <MenuItem
                           key={link.text}
                           onClick={() => handleClick(link)}
                        >
                           {link.text}
                        </MenuItem>
                     );
                  })}
            </MenuList>
         </Portal>
      </Menu>
   );
};

export default Account;
