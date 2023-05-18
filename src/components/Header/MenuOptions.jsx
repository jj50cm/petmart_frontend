import { BellIcon } from "@chakra-ui/icons";
import { Flex, Icon } from "@chakra-ui/react";
import { BsFillChatDotsFill, BsFillSuitHeartFill } from "react-icons/bs";
import MenuOptionItem from "./MenuOptionItem";
import Notification from "../Notification/Notification";
import ChatButton from "../Chat/ChatButton";

const MenuOptions = () => {
  // const options = [
  //   {
  //     text: "Danh sách yêu thích",
  //     icon: BsFillSuitHeartFill,
  //   },
  //   {
  //     text: "Thông báo",
  //     icon: BellIcon,
  //   },
  //   {
  //     text: "Trò chuyện",
  //     icon: BsFillChatDotsFill,
  //   },
  // ];

  return (
    <Flex gap={5} mr={8}>
      <Notification />
      <ChatButton />
    </Flex>
  );
};

export default MenuOptions;
