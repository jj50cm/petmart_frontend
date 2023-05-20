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
  const [user, setUser] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    const res = userList.find((user) => user.id.toString() === userId);
    setUser(res);
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
            {user && user.name}
          </Text>
          <Text fontSize={"14px"} color={"gray.500"}>
            Active 10m ago.
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ChatHeader;
