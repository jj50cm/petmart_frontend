import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import ChatSingleUser from "./ChatSingleUser";

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

const ChatUserList = ({ startChat }) => {
  return (
    <Flex
      gap={4}
      flexDirection={"column"}
      //   overflowY={"scroll"}
      overflow={"auto"}
      flexGrow={1}
      sx={{
        "&::-webkit-scrollbar": {
          width: "4px",
        },
        "&::-webkit-scrollbar-track": {
          background: "#f1f1f1",
          borderRadius: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#888",
          borderRadius: "6px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: "#555",
        },
        "&::-webkit-scrollbar-button": {
          display: "none",
        },
      }}
    >
      {userList.map((user) => {
        return (
          <ChatSingleUser key={user.id} user={user} startChat={startChat} />
        );
      })}
    </Flex>
  );
};

export default ChatUserList;
