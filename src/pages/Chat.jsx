import { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Input,
  IconButton,
  Button,
  Divider,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { MdSend } from "react-icons/md";
import { Outlet } from "react-router-dom";
import ChatUsers from "../components/Chat/ChatLeft/ChatUsers";
function Chat() {
  const [isChat, setIsChat] = useState(false);
  const startChat = () => {
    setIsChat(true);
  };
  return (
    <Box height={"100vh"} borderTop={"2px solid #f5897e"}>
      <Flex height={"100%"}>
        <ChatUsers startChat={startChat} />
        <Outlet />
      </Flex>
    </Box>
  );
}

export default Chat;
