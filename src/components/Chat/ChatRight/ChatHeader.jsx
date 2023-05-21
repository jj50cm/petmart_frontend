import React from "react";
import {
  Avatar,
  Box,
  Flex,
  HStack,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
const userList = [
  {
    id: 1,
    name: "Admin pethub",
    role: "admin",
  },
  {
    id: 2,
    name: "User 2",
    role: "seller",
  },
  {
    id: 3,
    name: "User 3",
    role: "buyer",
  },
  {
    id: 4,
    name: "User 4",
    role: "seller",
  },
  {
    id: 5,
    name: "User 5",
    role: "buyer",
  },
  {
    id: 6,
    name: "User 6",
    role: "seller",
  },
  {
    id: 7,
    name: "User 7",
    role: "buyer",
  },
  {
    id: 8,
    name: "User 8",
    role: "seller",
  },
  {
    id: 9,
    name: "User 9",
    role: "buyer",
  },
  {
    id: 10,
    name: "User 10",
    role: "seller",
  },
  {
    id: 11,
    name: "User 11",
    role: "buyer",
  },
  {
    id: 12,
    name: "User 12",
    role: "seller",
  },
  {
    id: 13,
    name: "User 13",
    role: "buyer",
  },
  {
    id: 14,
    name: "User 14",
    role: "seller",
  },
  {
    id: 15,
    name: "User 15",
    role: "buyer",
  },
  {
    id: 16,
    name: "User 16",
    role: "seller",
  },
  {
    id: 17,
    name: "User 17",
    role: "buyer",
  },
  {
    id: 18,
    name: "User 18",
    role: "seller",
  },
  {
    id: 19,
    name: "User 19",
    role: "buyer",
  },
  {
    id: 20,
    name: "User 20",
    role: "seller",
  },
];
const ChatHeader = () => {
  const [userName, setUserName] = useState("");
  const { userId } = useParams();
  const { chatList } = useSelector((state) => state.chat);

  const findUsernameByIdInThread = (threads, userId) => {
    for (const thread of threads) {
      const recipient = thread.recipients.find((r) => r.id === userId);
      if (recipient) {
        return recipient.username;
      }
    }
    return null;
  };
  useEffect(() => {
    const username = findUsernameByIdInThread(chatList, userId);
    setUserName(username);
  }, [userId]);
  return (
    <Box
      position="sticky"
      top="0"
      bg="white"
      color="#000"
      zIndex="1"
      boxShadow="0 1px 3px rgba(0, 0, 0, 0.2)"
    >
      <Flex align="center" px="4" py="2" maxW="1200px" mx="auto" gap={4}>
        <Avatar boxSize={10} src="https://bit.ly/broken-link" />
        <Flex flexDirection={"column"}>
          <Text fontWeight={"600"} fontSize={"16px"}>
            {userName}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ChatHeader;
