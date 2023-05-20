import { Icon } from "@chakra-ui/react";
import React from "react";
import { AiFillStar } from "react-icons/ai";
const RatingIcon = ({ filled, size, halfFilled = true }) => {
  const iconColor = filled ? "yellow.400" : "";
  const iconOpacity = halfFilled ? 0.5 : 1;
  return (
    <Icon
      as={AiFillStar}
      boxSize={size}
      fill={iconColor}
      opacity={iconOpacity}
    />
  );
};

export default RatingIcon;
