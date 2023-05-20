import { Divider, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const ChatUserSearch = () => {
  return (
    <InputGroup
      bgColor={"rgba(134, 142, 153, 0.1)"}
      borderRadius={"2rem"}
      display={{ base: "none", sm: "block" }}
    >
      <InputLeftElement children={<SearchIcon color="gray.500" />} />
      <Input
        type="text"
        placeholder="Search user"
        outline={"none"}
        borderRadius={"2rem"}
      />
    </InputGroup>
  );
};

export default ChatUserSearch;
