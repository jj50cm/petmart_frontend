import { Avatar, Box, Flex, HStack, Text, Tooltip } from "@chakra-ui/react";
import { useState } from "react";

import "./ChatMessages.css";
import { useDispatch, useSelector } from "react-redux";

const ChatMessages = () => {
  const dispatch = useDispatch();
  const { chatMessages } = useSelector((state) => state.chat);
  const { userInfo } = useSelector((state) => state.user);
  return (
    <Box maxHeight={"100%"} overflow={"auto"} padding={8}>
      <Flex flexDirection={"column"}>
        {chatMessages &&
          chatMessages.map((mess) => {
            const isMe = mess.sender.id === userInfo.user.id;
            return (
              <HStack key={mess._id} className={isMe ? "sender" : "receiver"}>
                {!isMe && (
                  <Tooltip
                    label={mess.sender.username}
                    fontWeight={"400"}
                    borderRadius={5}
                  >
                    <Avatar boxSize={9} />
                  </Tooltip>
                )}
                <Text>{mess.body}</Text>
              </HStack>
            );
          })}
      </Flex>
    </Box>
  );
};

export default ChatMessages;
