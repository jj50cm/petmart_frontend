import { useState, useRef, useEffect } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import { getNotifications } from "../../redux/actions/notificationActions";

export default function NotificationButton() {
  const [notificationsCount, setNotificationsCount] = useState(0);
  const dispatch = useDispatch();
  const { numOfNewNotifications } = useSelector((state) => state.notification);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const boxRef = useRef(null);
  const btnRef = useRef(null);
  const iconRef = useRef(null);

  const handleClick = () => {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  };

  useEffect(() => {
    dispatch(getNotifications());
  }, []);

  useEffect(() => {
    setNotificationsCount(numOfNewNotifications);
  }, [numOfNewNotifications]);

  return (
    <Box position="relative">
      <Tooltip label="Thông báo">
        <Button
          ref={btnRef}
          colorScheme="gray"
          borderRadius={"50%"}
          onClick={() => handleClick()}
        >
          <Icon
            //as={isOpen ? AiFillBell : AiOutlineBell}
            boxSize={5}
            ref={iconRef}
          />
          {notificationsCount > 0 && (
            <Box
              position="absolute"
              top="-4px"
              right="-4px"
              bg="red.500"
              color="white"
              fontSize="xs"
              fontWeight="bold"
              lineHeight="1"
              borderRadius="full"
              px={2}
              py={1}
            >
              {notificationsCount}
            </Box>
          )}
        </Button>
      </Tooltip>
      {isOpen && (
        <Box
          ref={boxRef}
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
