import { Button, Icon, Tooltip, useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { BsCheckLg } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import {
  getFavoriteList,
  updateFavorite,
} from "../../redux/actions/postActions";
const LikeButton = ({ postId }) => {
  const dispatch = useDispatch();
  const { isLike, error, loading } = useSelector((state) => state.post);
  const toast = useToast();
  useEffect(() => {
    dispatch(getFavoriteList(postId));
  }, []);
  const handleToggleLike = () => {
    dispatch(updateFavorite(postId));
    if (!error) {
      toast({
        description: !isLike
          ? "Đã thêm vào ds yêu thích"
          : "Đã xóa khỏi ds yêu thích",
        isClosable: true,
        position: "top",
        status: "success",
      });
    }
  };
  console.log("Trang thai bai dang", isLike);
  return (
    <Tooltip label={isLike ? "Đã thích" : "Thêm vào danh sách yêu thích"}>
      <Button
        isLoading={loading}
        onClick={() => handleToggleLike()}
        bgColor={isLike ? "red.500" : "red.100"}
        color={"white"}
        _hover={{
          backgroundColor: isLike ? "red.500" : "red.200",
        }}
      >
        {!isLike && <Icon as={FcLike} boxSize={5}></Icon>}
        {isLike && <Icon as={BsCheckLg} boxSize={5}></Icon>}
      </Button>
    </Tooltip>
  );
};

export default LikeButton;
