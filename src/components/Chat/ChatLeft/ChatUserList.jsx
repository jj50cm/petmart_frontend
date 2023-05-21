import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import ChatSingleUser from "./ChatSingleUser";
import { useSelector } from "react-redux";

const styleScroll = {
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
};

const ChatUserList = () => {
  const { chatList } = useSelector((state) => state.chat);
  return (
    <Flex
      gap={4}
      flexDirection={"column"}
      //   overflowY={"scroll"}
      overflow={"auto"}
      flexGrow={1}
      sx={styleScroll}
    >
      {chatList &&
        chatList.map((item) => {
          const user = item.recipients[1];
          const lastMess = item.lastestMessage.body;
          return (
            <ChatSingleUser key={user.id} user={user} lastMess={lastMess} />
          );
        })}
    </Flex>
  );
};

export default ChatUserList;
