import { Tooltip } from "@chakra-ui/react";
import React from "react";

const TooltipIcon = ({ children, text }) => {
   return <Tooltip label={text}>{children}</Tooltip>;
};

export default TooltipIcon;
