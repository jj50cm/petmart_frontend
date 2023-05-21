import { Grid, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessageInput from "./ChatMessageInput";
import ChatMessages from "./ChatMessages";
import { useSelector } from "react-redux";

const ChatConversation = () => {
  const { isStartChat } = useSelector((state) => state.chat);
  return (
    <>
      {isStartChat && (
        <Grid
          width={"75%"}
          height={"100%"}
          gridTemplateColumns={"1fr"}
          gridTemplateRows={"auto 1fr auto"}
        >
          <ChatHeader />
          <ChatMessages />
          <ChatMessageInput />
        </Grid>
      )}
    </>
  );
};

export default ChatConversation;
