import { BsShieldPlus } from "react-icons/bs";
import { MdOutlineReportGmailerrorred, MdPets } from "react-icons/md";
import { SiSourceforge } from "react-icons/si";
import { AiOutlineEye } from "react-icons/ai";
import { TfiRulerAlt } from "react-icons/tfi";
import {
   Box,
   Button,
   Divider,
   Flex,
   HStack,
   Heading,
   Icon,
   Link,
   SimpleGrid,
   Spacer,
   Text,
} from "@chakra-ui/react";
import SubTitle from "../../components/PostDetail/SubTitle";
const PostInformation = () => {
   return (
      <Box my={"32px"}>
         <SubTitle>Thông tin chi tiết</SubTitle>
         <SimpleGrid columns={2} spacing={4}>
            <Text>
               <Icon as={TfiRulerAlt} /> Cân nặng: lớn
            </Text>
            <Text>
               <Icon as={SiSourceforge} mr={"4px"} />
               Giống thú cưng: Pitbull
            </Text>
            <Text>
               <Icon as={BsShieldPlus} mr={"4px"} />
               Tiêm phòng: có
            </Text>
            <Text>
               <Icon as={MdPets} mr={"4px"} />
               Độ tuổi: 6 tháng
            </Text>
         </SimpleGrid>
         <SubTitle>Đặc điểm nổi bật</SubTitle>
         <Text maxW={"90%"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            temporibus, tempora impedit recusandae eveniet consectetur possimus
            laborum officia ipsa, vero, aut quo ipsum? Quibusdam reprehenderit
            laboriosam aliquam sapiente commodi facere! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Placeat delectus optio quos id
            eligendi numquam commodi, quam quas doloremque dolorem?
         </Text>
         <Flex mt={"12px"} gap={3}>
            <Text fontWeight={"bold"}>Địa chỉ:</Text>
            <Text>Xuân Thủy Cầu giấy Hà nội</Text>
         </Flex>
      </Box>
   );
};

export default PostInformation;
