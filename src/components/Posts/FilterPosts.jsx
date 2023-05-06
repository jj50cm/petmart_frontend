import { Box, Flex } from "@chakra-ui/react";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterForm from "../FilterForm";
import Searbar from "../Searbar";

const FilterPosts = () => {
  const inputRefs = useRef([]);
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  const { loading, error, postList } = post;

  const handleFilter = (param) => {
    console.log(param);
    inputRefs.current.forEach((ref) => {
      console.log(ref.current.firstChild);
    });
  };

  const filterCategory = [
    {
      name: "Địa chỉ",
      data: ["Tất cả", "Hà nội", "Bắc Ninh"],
    },
    {
      name: "Loại thú cưng",
      data: ["Tất cả", "Chó", "Mèo"],
    },
    {
      name: "Tuổi (tháng)",
      data: ["Tất cả", "0-12", "12-36", "lớn hơn 36"],
    },
    {
      name: "Giới tính",
      data: ["Tất cả", "Đực", "Cái"],
    },
    {
      name: "Cân nặng",
      data: ["Tất cả", "2kg", "4kg"],
    },
    {
      name: "Vaccince",
      data: ["Tất cả", "đã tiêm", "chưa tiêm"],
    },
  ];

  return (
    <Box flexBasis={"20%"} mr={"10px"} mb={{ sm: "10px" }}>
      <Flex flexDirection={"column"} gap={"16px"}>
        <Box>
          <Searbar />
        </Box>
        {filterCategory.map((category, index) => {
          inputRefs.current[index] =
            inputRefs.current[index] || React.createRef();
          return (
            <Box key={index} ref={inputRefs.current[index]}>
              <FilterForm category={category} handleFilter={handleFilter} />
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

export default FilterPosts;
