import { Button, Icon, Tooltip } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsChatText } from "react-icons/bs";

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openChat = () => {
    console.log("openChat");
    setIsOpen(!isOpen);
  };
  return (
    <Tooltip label="Trò chuyện" bg="pink.400">
      <Button
        colorScheme="gray"
        borderRadius={"50%"}
        onClick={() => openChat()}
      >
        <Icon as={BsChatText} boxSize={5} />
      </Button>
    </Tooltip>
  );
};

export default ChatButton;
