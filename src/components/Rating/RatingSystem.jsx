import { HStack } from "@chakra-ui/react";
import RatingIcon from "./RatingIcon";

const RatingSystem = ({ rating }) => {
   const MAX_RATING = 5;
   return (
      <HStack spacing={1}>
         {Array.from({ length: MAX_RATING }, (_, index) => (
            <RatingIcon
               key={index}
               filled={index < rating}
               size={{ base: "3", md: "3", lg: "4" }}
            />
         ))}
      </HStack>
   );
};
export default RatingSystem;
