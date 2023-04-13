import {
   Menu,
   MenuButton,
   HStack,
   MenuItem,
   MenuList,
   Portal,
   Text,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { VscAccount } from "react-icons/vsc";

const Account = () => {
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
               <MenuItem>Đăng nhập</MenuItem>
               <MenuItem>Đăng Ký</MenuItem>
            </MenuList>
         </Portal>
      </Menu>
   );
};

export default Account;
