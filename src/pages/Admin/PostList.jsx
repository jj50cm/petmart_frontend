import {
   Box,
   Flex,
   Heading,
   Tab,
   TabList,
   TabPanels,
   Tabs,
} from "@chakra-ui/react";
import React, { useState } from "react";
import AdminAccountTable from "../../components/Admin/AdminAccountTable";
import AdminPostTable from "../../components/Admin/AdminPostsTable";
const postList = [ {
   "id": "6454d521e932790c404c3b2b",
   "title": "Bán mèo béo",
   "createdDate": "2023-05-05T10:06:25.000Z",
   "description": "Mèo nhà vàng",
   "isApproved": false,
   "available": false,
   "province": "Bắc Ninh",
   "district": "Yên Phong",
   "commune": "Văn Môn",
   "address": "thôn Mẫn Xá",
   "price": 1000000,
   "species": "Mèo",
   "gender": "Đực",
   "age": 12,
   "image": "https://res.cloudinary.com/bachhs/image/upload/v1683281170/places/8b844ba0-8ca6-451b-a411-e608e5e9a7cc_bt47vp.jpg",
   "star": 0,
   "views": 7,
   "creator": {
     "username": "Admin Pethub",
     "email": "pethub@gmail.com",
     "id": "644253d1f1c989b08f76d47b"
   }
 }]
const mapRole = {
   0: "",
   1: "seller",
   2: "buyer",
};
const AdminPostList = () => {
   const tableHeader = [
      "Tên bài",
      "Chủ sở hữu",
      "Địa chỉ",
      "Trạng thái",
      "Số lượng",
      "Lượt xem",
      "Lượt đánh giá",
      "Hành động",
   ];
   const styleText = {
      textTransform: "uppercase",
      fontSize: "18px",
      fontWeight: "600",
   };
   return (
      <Box marginX={8} paddingTop={5} height={"calc(100vh - 76px)"}>
         <Heading
            fontSize={"3xl"}
            ml={6}
            color={"#453227"}
            fontStyle={"italic"}
         >
            Danh sách bài đăng
         </Heading>
         <Tabs
            padding={3}
           
            bgColor={"white"}
         >
            <TabList gap={"82px"}>
               <Tab sx={styleText}>Tất cả</Tab>
               <Tab sx={styleText}>Chưa duyệt</Tab>
            </TabList>
            <TabPanels>
               <AdminPostTable tableHeader={tableHeader} posts={postList} />
            </TabPanels>
         </Tabs>
      </Box>
   );
};

export default AdminPostList;
