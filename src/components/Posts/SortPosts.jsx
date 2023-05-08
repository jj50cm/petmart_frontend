import {
  Box,
  Divider,
  Flex,
  FormLabel,
  HStack,
  Select,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import TotalPosts from "./TotalPosts";
import { useDispatch } from "react-redux";
import { sortShowPostList } from "../../redux/actions/postActions";
const sortBy = [
  { text: "Ngày đăng (mới đến cũ)", value: "desc", property: "createdDate" },
  { text: "Ngày đăng (cũ đến mới)", value: "asc", property: "createdDate" },
  { text: "Giá (tăng dần)", value: "asc", property: "price" },
  { text: "Giá (giảm dần)", value: "desc", property: "price" },
  { text: "Lượt xem (tăng dần)", value: "asc", property: "views" },
  { text: "Lượt xem (giảm dần)", value: "desc", property: "views" },
];
const SortPosts = () => {
  const [selectVal, setSelectVal] = useState(0);
  const dispatch = useDispatch();
  const handleSortPosts = ({ target }) => {
    setSelectVal(target.value);
  };

  useEffect(() => {
    dispatch(
      sortShowPostList({
        prop: sortBy[selectVal].property,
        value: sortBy[selectVal].value,
      })
    );
  }, [selectVal]);

  return (
    <Flex alignItems={"center"} justifyContent={"space-between"} mb={"10px"}>
      <TotalPosts />
      <Divider
        orientation="horizontal"
        borderColor="gray.500"
        flexBasis={{ base: "20%", sm: "40%", md: "50%", lg: "65%" }}
      />
      <Box flexBasis={{ base: "40%", sm: "30%", md: "30%", lg: "20%" }}>
        <Select
          placeholder=""
          value={selectVal}
          onChange={(event) => handleSortPosts(event)}
        >
          {sortBy &&
            sortBy.map((item, index) => {
              return (
                <option key={index} value={index}>
                  {item.text}
                </option>
              );
            })}
        </Select>
      </Box>
    </Flex>
  );
};

export default SortPosts;
