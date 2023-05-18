import { HStack, List, ListItem, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getNotifications,
  seenNotification,
} from "../../redux/actions/notificationActions";

function NotificationList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { notifications } = useSelector((state) => state.notification);

  const handleClick = (postId, notiId, seen) => {
    if (!seen) {
      dispatch(seenNotification(notiId));
      dispatch(getNotifications());
    }
    // navigate(`/admin/posts/${postId}`);
  };

  return (
    <List spacing={3} padding={"8px"}>
      {notifications &&
        notifications.map((notification) => (
          <ListItem
            key={notification.id}
            _hover={{ bg: "gray.200" }}
            borderRadius="md"
            padding="2"
            cursor={"pointer"}
            bg={notification.seen ? "white" : "green.100"}
            onClick={() =>
              handleClick(notification.post, notification.id, notification.seen)
            }
          >
            <HStack justifyContent={"space-between"}>
              <Text
                fontSize="md"
                textTransform={"uppercase"}
                fontWeight={"bold"}
              >
                {notification.type === "EXTENDPOST" && "Gia hạn bài đăng"}
                {notification.type === "ADMIN" && "Bài đăng cần duyệt"}
                {notification.type === "APPROVED" && "Bài đăng đã được duyệt"}
                {notification.type === "EXTENDAPPROVED" &&
                  "Bài đăng đã được gia hạn"}
              </Text>
              <Text fontSize="xs" color="gray.500">
                {notification.seen ? "Seen" : "Unseen"}
              </Text>
            </HStack>
            <Text>{notification.title}</Text>
          </ListItem>
        ))}
    </List>
  );
}

export default NotificationList;
