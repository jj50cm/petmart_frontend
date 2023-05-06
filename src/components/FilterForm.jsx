import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import React, { useRef } from "react";
import { filterPosts } from "../redux/actions/postActions";

const FilterForm = ({ category, handleFilter }) => {
  const { name, data } = category;
  const handleChange = (event) => {
    let param = event.target.value;
    if (param === "Tất cả") {
      param = "";
    }
    handleFilter(param);
  };
  return (
    <FormControl onChange={(value) => handleChange(value)}>
      <FormLabel>{name}</FormLabel>
      <Select placeholder="">
        {data.length > 0 &&
          data.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
      </Select>
    </FormControl>
  );
};

export default FilterForm;
