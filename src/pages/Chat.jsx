import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  Input,
  IconButton,
  Button,
  Divider,
  Heading,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import { ArrowBackIcon } from "@chakra-ui/icons";
import { MdSend } from "react-icons/md";
import { Outlet } from "react-router-dom";
import ChatUsers from "../components/Chat/ChatLeft/ChatUsers";
import { getChatData } from "../redux/actions/chatAction";
import { setIsStartChat } from "../redux/slices/chat";
function Chat() {
  const dispatch = useDispatch();
  const { isStartChat } = useSelector((state) => state.chat);

  useEffect(() => {
    dispatch(getChatData());
    dispatch(setIsStartChat(false));
  }, []);
  return (
    <Box height={"100vh"} borderTop={"2px solid #f5897e"}>
      <Flex height={"100%"}>
        <ChatUsers />
        {!isStartChat && (
          <Heading width={"100%"} textAlign={"center"} mt={4}>
            Hãy bắt đầu cuộc trò chuyện
          </Heading>
        )}
        <Outlet />
      </Flex>
    </Box>
  );
}

export default Chat;
