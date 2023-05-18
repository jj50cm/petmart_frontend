import { Button, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import RatingIcon from "../../components/Rating/RatingIcon";
import RatingSystem from "../../components/Rating/RatingSystem";
import { useDispatch, useSelector } from "react-redux";
let initialRatingSelections = [
  { id: 0, text: "Tất cả", isActive: true },
  { id: 5, text: "5 Sao", numRating: 4, isActive: false },
  { id: 4, text: "4 Sao", numRating: 1, isActive: false },
  { id: 3, text: "3 Sao", numRating: 3, isActive: false },
  { id: 2, text: "2 Sao", numRating: 4, isActive: false },
  { id: 1, text: "1 Sao", numRating: 2, isActive: false },
];
const PostRatingOverview = () => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  const { singlePost } = post;

  const {
    post: { star },
  } = singlePost;
  const [ratingSelections, setRatingSelections] = useState(
    initialRatingSelections
  );
  const styleBtnActive = {
    backgroundColor: "#fff",
    color: "#ee4d2d",
    borderColor: "#ee4d2d",
  };
  const handleClick = (id) => {
    console.log(`click ${id}`);
    setRatingSelections((prev) => {
      return prev.map((item) =>
        item.id === id
          ? { ...item, isActive: true }
          : { ...item, isActive: false }
      );
    });
  };
  console.log(post);
  return (
    <Flex
      gap={8}
      padding={"24px"}
      bgColor={"pink.50"}
      border={"1px solid #f9ede5"}
    >
      <Stack pl={"12px"}>
        <Text fontWeight={"600"} fontSize={"20px"} color={"#ee4d2d"}>
          {" "}
          <Text as={"span"} fontSize={"26px"}>
            {star || 0}
          </Text>{" "}
          trên 5 ✨
        </Text>
        {/* <RatingSystem rating={star} /> */}
        {/* filled={"#ee4d2d"} size={6} */}
      </Stack>
      <Flex flexWrap={"wrap"} gap={4}>
        {ratingSelections.map((rating) => {
          return (
            <Button
              key={rating.id}
              bgColor={"white"}
              fontWeight={"400"}
              borderRadius={"3px"}
              border={"1px solid rgba(0,0,0,.09)"}
              style={rating.isActive ? styleBtnActive : null}
              onClick={() => handleClick(rating.id)}
            >
              {rating.text} ({rating.numRating})
            </Button>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default PostRatingOverview;
