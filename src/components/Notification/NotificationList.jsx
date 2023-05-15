import { List, ListItem, Text } from "@chakra-ui/react";
const notifications = [
  {
    id: 1,
    message: "You have a new message.",
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    message: "Your order has shipped.",
    timestamp: "1 day ago",
  },
  {
    id: 3,
    message: "Please update your payment information.",
    timestamp: "1 week ago",
  },
  {
    id: 4,
    message: "Please update your payment information.",
    timestamp: "1 week ago",
  },
];
function NotificationList() {
  return (
    <List spacing={3} padding={"8px"}>
      {notifications.map((notification) => (
        <ListItem key={notification.id}>
          <Text fontSize="sm">{notification.message}</Text>
          <Text fontSize="xs" color="gray.500">
            {notification.timestamp}
          </Text>
        </ListItem>
      ))}
    </List>
  );
}
export default NotificationList;
