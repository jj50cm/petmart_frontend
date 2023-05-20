import { Box, Divider, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import ChatUserSearch from "./ChatUserSearch";
import ChatUserList from "./ChatUserList";

const ChatUsers = ({ startChat }) => {
  return (
    <Box
      flexBasis={"25%"}
      height={"100%"}
      padding={{ base: 2, sm: 6 }}
      borderRight={"2px solid #edf2f7"}
    >
      <Flex flexDirection={"column"} gap={6} height={"100%"}>
        <Heading fontSize={"24px"}>Chats</Heading>
        <ChatUserSearch />
        <ChatUserList startChat={startChat} />
      </Flex>
    </Box>
  );
};

export default ChatUsers;
