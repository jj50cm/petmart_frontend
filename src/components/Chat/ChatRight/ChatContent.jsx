import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import ChatMessages from "./ChatMessages";
import ChatMessageInput from "./ChatMessageInput";

const ChatContent = () => {
  return (
    <Flex flexDirection={"column"} height={"100%"}>
      <ChatMessages />
      <ChatMessageInput />
    </Flex>
  );
};

export default ChatContent;
