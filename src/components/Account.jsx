import {
   Menu,
   MenuButton,
   HStack,
   MenuItem,
   MenuList,
   Portal,
   Text,
   Link,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { VscAccount } from "react-icons/vsc";
import { Link as ReactLink } from "react-router-dom";

const Account = () => {
   const accountLinks = [
      { text: "Đăng nhập", path: "/login" },
      { text: "Đăng ký", path: "/register" },
   ];
   return (
      <Menu>
         <MenuButton>
            <HStack>
               <Icon boxSize={7} as={VscAccount} />
               <Text>Tài khoản</Text>
            </HStack>
         </MenuButton>
         <Portal>
            <MenuList>
               {accountLinks.map((link) => {
                  return (
                     <MenuItem key={link.text}>
                        <Link as={ReactLink} to={link.path}>
                           {link.text}
                        </Link>
                     </MenuItem>
                  );
               })}
            </MenuList>
         </Portal>
      </Menu>
   );
};

export default Account;
