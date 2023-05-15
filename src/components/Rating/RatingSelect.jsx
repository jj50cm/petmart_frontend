import { useState } from "react";
import { Stack, Icon } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

const RatingSelect = ({ defaultRating = 0, updateRating, onChange }) => {
  const [rating, setRating] = useState(defaultRating);

  const handleClick = (newRating) => {
    setRating(newRating);
    onChange && onChange(newRating);
    console.log(newRating);
    updateRating(newRating);
  };

  const stars = [1, 2, 3, 4, 5];

  return (
    <Stack direction="row" spacing={1}>
      {stars.map((star) => (
        <Icon
          key={star}
          as={FaStar}
          boxSize={7}
          color={star <= rating ? "yellow.300" : "gray.300"}
          cursor="pointer"
          onClick={() => handleClick(star)}
        />
      ))}
    </Stack>
  );
};
export default RatingSelect;
