import { BellIcon } from "@chakra-ui/icons";
import { Flex, Icon } from "@chakra-ui/react";
import { BsFillChatDotsFill, BsFillSuitHeartFill } from "react-icons/bs";
import MenuOptionItem from "./MenuOptionItem";

const MenuOptions = () => {
   const options = [
      {
         text: "Danh sách yêu thích",
         icon: BsFillSuitHeartFill,
      },
      {
         text: "Thông báo",
         icon: BellIcon,
      },
      {
         text: "Trò chuyện",
         icon: BsFillChatDotsFill,
      },
   ];

   return (
      <Flex gap={8}>
         {options.map((option) => (
            <MenuOptionItem text={option.text} key={option.text}>
               <Icon as={option.icon} boxSize={6} />
            </MenuOptionItem>
         ))}
      </Flex>
   );
};

export default MenuOptions;
