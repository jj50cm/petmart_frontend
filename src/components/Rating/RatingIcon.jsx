import { Icon } from "@chakra-ui/react";
import React from "react";
import { AiFillStar } from "react-icons/ai";
const RatingIcon = ({ filled, size }) => {
   const iconColor = filled ? "yellow.400" : "";
   return <Icon as={AiFillStar} boxSize={size} fill={iconColor}></Icon>;
};

export default RatingIcon;
