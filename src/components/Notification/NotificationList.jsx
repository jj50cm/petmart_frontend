import {
  Button,
  HStack,
  List,
  ListItem,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getNotifications,
  seenNotification,
} from "../../redux/actions/notificationActions";
import NotificationItem from "./NotificationItem";
import { getPostById, getPostForNotifi } from "../../redux/actions/postActions";
import { EmailIcon, Icon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import NotificationModal from "./NotificationModal";
import { setSinglePost } from "../../redux/slices/post";

function NotificationList() {
  const [extendDate, setExtendDate] = useState("");
  const [post, setPost] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { notifications } = useSelector((state) => state.notification);
  const { postForNotification } = useSelector((state) => state.post);
  const { userInfo } = useSelector((state) => state.user);

  const handleClick = (postId, notiId, seen, type, extendDate) => {
    console.log(type);
    // lấy thông tin bài đăng
    dispatch(getPostForNotifi(postId));
    // nếu là yêu cầu gia hạn bài đăng
    if (type === "EXTENDPOST" || type === "EXTENDAPPROVED") {
      if (userInfo.user.role === "admin") {
        // mở popup ra hạn bài đăng(đã duyệt or chưa)
        onOpen();
        setExtendDate(extendDate);
      } else {
        dispatch(getPostById(postId));
        navigate(`/posts/${postId}`);
      }
    }
    if (type === "APPROVED" || type === "ADMIN") {
      dispatch(getPostById(postId));
      // nếu là admin
      if (userInfo.user.role === "admin") {
        navigate(`/admin/posts/${postId}`);
      } else {
        navigate(`/posts/${postId}`);
      }
    }
    if (!seen) {
      dispatch(seenNotification(notiId));
      dispatch(getNotifications());
    }
  };

  return (
    <List spacing={3} padding={"8px"}>
      {notifications && notifications.length <= 0 && (
        <Text textAlign={"center"}>Bạn chưa có thông báo nào cả.</Text>
      )}
      {notifications &&
        notifications.length > 0 &&
        notifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            notification={notification}
            openNotification={handleClick}
          />
        ))}
      {postForNotification && (
        <NotificationModal
          singlePost={postForNotification}
          isOpen={isOpen}
          onClose={onClose}
          extendDate={extendDate}
        />
      )}
    </List>
  );
}

export default NotificationList;
