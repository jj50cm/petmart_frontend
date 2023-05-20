import { HStack, ListItem, Text } from "@chakra-ui/react";
import React from "react";

const NotificationItem = ({ notification, openNotification }) => {
  return (
    <ListItem
      key={notification.id}
      _hover={{ bg: "gray.200" }}
      borderRadius="md"
      padding="2"
      cursor={"pointer"}
      bg={notification.seen ? "white" : "green.100"}
      onClick={() =>
        openNotification(
          notification.post,
          notification.id,
          notification.seen,
          notification.type,
          notification.extendDate
        )
      }
    >
      <HStack justifyContent={"space-between"}>
        <Text fontSize="md" textTransform={"uppercase"} fontWeight={"bold"}>
          {notification.type === "ADMIN" && "Bài đăng cần duyệt"}
          {notification.type === "APPROVED" && "Bài đăng đã được duyệt"}
          {notification.type === "EXTENDPOST" && "Gia hạn bài đăng"}
          {notification.type === "EXTENDAPPROVED" && "Bài đăng đã được gia hạn"}
        </Text>
        <Text fontSize="xs" color="gray.500">
          {notification.seen ? "Seen" : "Unseen"}
        </Text>
      </HStack>
      <Text>{notification.title}</Text>
    </ListItem>
  );
};

export default NotificationItem;
