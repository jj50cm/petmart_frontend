import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import React from "react";

const FilterForm = ({ category }) => {
   const { name, data } = category;

   return (
      <FormControl>
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
