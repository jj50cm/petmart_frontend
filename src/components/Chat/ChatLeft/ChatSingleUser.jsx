import {
  Avatar,
  Box,
  Flex,
  HStack,
  Heading,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./ChatSingleUser.css";
import { useDispatch } from "react-redux";
import { setIsStartChat } from "../../../redux/slices/chat";
import { getChatMessages } from "../../../redux/actions/chatAction";

const roleMap = {
  admin: "admin",
  seller: "người bán",
  buyer: "người mua",
};

const ChatSingleUser = ({ user, lastMess }) => {
  const styleActive = ({ isActive }) => (isActive ? "active" : "");
  const dispatch = useDispatch();

  const startChat = () => {
    dispatch(setIsStartChat(true));
    dispatch(getChatMessages(user.id));
  };
  return (
    <NavLink
      to={`${user.id}`}
      className={styleActive}
      onClick={() => startChat()}
    >
      <Flex
        gap={4}
        alignItems={"center"}
        padding={2}
        cursor={"pointer"}
        _hover={{
          bgColor: "gray.100",
        }}
        borderRadius={6}
        // justifyContent={"center"}
      >
        <Tooltip label={user.username}>
          <Avatar src="https://bit.ly/broken-link" />
        </Tooltip>
        <Flex flexDirection={"column"} display={{ base: "none", sm: "flex" }}>
          <Heading fontSize={"md"}>{user.username}</Heading>
          <Text>{lastMess}</Text>
        </Flex>
      </Flex>
    </NavLink>
  );
};

export default ChatSingleUser;
