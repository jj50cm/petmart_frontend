import { useState } from "react";
import {
  Box,
  Button,
  Icon,
  IconButton,
  List,
  ListItem,
  Stack,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlineBell, AiFillBell } from "react-icons/ai";
import NotificationList from "./NotificationList";

export default function NotificationButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box position="relative">
      {/* <IconButton
        variant="ghost"
        colorScheme="gray"  
        icon={<AiOutlineBell />}
        aria-label="Notifications"
      
      /> */}
      <Tooltip label="Thông báo" bg="pink.400">
        <Button
          colorScheme="gray"
          borderRadius={"50%"}
          onClick={() => (isOpen ? onClose() : onOpen())}
        >
          <Icon as={isOpen ? AiFillBell : AiOutlineBell} boxSize={5} />
        </Button>
      </Tooltip>
      {isOpen && (
        <Box
          position="absolute"
          top="100%"
          right="0"
          zIndex="1"
          bg="white"
          boxShadow="xl"
          p={3}
          rounded="md"
          minW="sm"
          maxH="md"
          overflowY="auto"
          borderWidth="1px"
          borderColor="gray.200"
        >
          <Stack spacing={3}>
            <Text fontSize="lg" fontWeight="bold" textAlign={"center"}>
              Thông báo
            </Text>
            <NotificationList />
            <Button size="sm" variant="link" onClick={onClose}>
              Đóng
            </Button>
          </Stack>
        </Box>
      )}
    </Box>
  );
}
