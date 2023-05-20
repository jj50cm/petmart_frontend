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

const roleMap = {
  admin: "admin",
  seller: "người bán",
  buyer: "người mua",
};

const ChatSingleUser = ({ user, startChat }) => {
  const styleActive = ({ isActive }) => (isActive ? "active" : "");

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
      >
        <Tooltip label={user.name}>
          <Avatar src="https://bit.ly/broken-link" />
        </Tooltip>
        <Flex flexDirection={"column"} display={{ base: "none", sm: "flex" }}>
          <Heading fontSize={"md"}>{user.name}</Heading>
          <Text>{roleMap[user.role]}</Text>
        </Flex>
      </Flex>
    </NavLink>
  );
};

export default ChatSingleUser;
