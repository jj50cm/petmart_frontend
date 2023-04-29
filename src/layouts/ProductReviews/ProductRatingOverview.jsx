import { Button, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import RatingIcon from "../../components/Rating/RatingIcon";
import RatingSystem from "../../components/Rating/RatingSystem";
let initialRatingSelections = [
   { id: 0, text: "Tất cả", isActive: true },
   { id: 1, text: "1 Sao", numRating: 2, isActive: false },
   { id: 2, text: "2 Sao", numRating: 4, isActive: false },
   { id: 3, text: "3 Sao", numRating: 3, isActive: false },
   { id: 4, text: "4 Sao", numRating: 1, isActive: false },
   { id: 5, text: "5 Sao", numRating: 40, isActive: false },
];
const ProductRatingOverview = () => {
   const [ratingSelections, setRatingSelections] = useState(
      initialRatingSelections
   );
   const styleBtnActive = {
      backgroundColor: "#fff",
      color: "#ee4d2d",
      borderColor: "#ee4d2d",
   };
   const handleClick = (id) => {
      console.log("click");
      setRatingSelections((prev) => {
         return prev.map((item) =>
            item.id === id
               ? { ...item, isActive: true }
               : { ...item, isActive: false }
         );
      });
   };
   return (
      <Flex
         gap={5}
         padding={"24px"}
         bgColor={"pink.50"}
         border={"1px solid #f9ede5"}
      >
         <Stack>
            <Text> 4.5 trên 5</Text>
            <RatingSystem rating={3.5} />
            {/* filled={"#ee4d2d"} size={6} */}
         </Stack>
         <HStack>
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
         </HStack>
      </Flex>
   );
};

export default ProductRatingOverview;
