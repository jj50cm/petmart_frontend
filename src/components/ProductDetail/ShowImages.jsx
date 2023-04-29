import { Box } from "@chakra-ui/react";
import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

export default function ShowImages() {
   const sliderImages = [
      {
         url: "https://picsum.photos/id/0/367/267",
      },
      {
         url: "https://chugiong.com/uploads/cac-loai-cho-canh-khac-quan-hoan-kiem-15751349187815886.jpg",
      },
      {
         url: "https://chugiong.com/uploads/cho-phu-quoc-quan-binh-thanh-15739158287484097.jpg",
      },
   ];
   return (
      <Box width={"45%"}>
         <SimpleImageSlider
            width={520}
            height={250}
            images={sliderImages}
            showNavs={true}
            showBullets={true}
         />
      </Box>
   );
}
