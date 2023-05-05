import { Box, CircularProgress } from "@chakra-ui/react";
import React from "react";

const LoadingList = () => {
    const style = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        padding: "12px"
    }
  return (
    <Box sx={style}
    >
      <CircularProgress  isIndeterminate color="blue.500" />
    </Box>
  );
};

export default LoadingList;

