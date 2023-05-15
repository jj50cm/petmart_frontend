import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCreatedPosts, getFavouritePosts } from "../redux/actions/postActions";
import { setCreatedPostList, setFavouritePostList } from "../redux/slices/post";
import {
   Tabs,
   TabList,
   TabPanels,
   Tab,
   Grid,
   GridItem,
   SimpleGrid,
   TabPanel,
   Box,
   Image,
   Text
} from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import LoadingList from "../components/Admin/LoadingList";
import SinglePost from "../components/Posts/SinglePost";


const mapApprove = {
   0: "true"
}


const ProfilePage = () => {

   // lấy dữ liệu
   const dispatch = useDispatch();
   const user = useSelector((state) => state.user);
   const post = useSelector((state) => state.post);
   const { loading, error, createdPostList, favouritePostList } = post;
   console.log(user);
   console.log(createdPostList);
   const { userInfo } = user;

   const updatePostList = (index) => {

      if (index == 1) {
         const newCreatedList = createdPostList;
         dispatch(setCreatedPostList(newCreatedList));
      }
      else {
         const newFavouriteList = favouritePostList;
         dispatch(setFavouritePostList(newFavouriteList));
      }

   }

   // cập nhật danh sách post
   useEffect(() => {
      dispatch(getCreatedPosts(userInfo.user.id));
      dispatch(getFavouritePosts(userInfo.user.id));
   }, []);

   const styleText = {
      textTransform: "uppercase",
      fontSize: "18px",
      fontWeight: "600",
   };

   return (
      <>
         <Box
            height={"calc(50vh - 84px)"}
            bgImage={"url('./images/user.png')"}
            bgPosition="center"
            bgSize={"cover"}
            bgRepeat="no-repeat"
            position={"relative"}
         >
            <Avatar
               size='2xl'
               position={'absolute'}
               top={"calc(25vh + 50px)"}
               left={"6%"}
            />
            <Box >
               <Text
                  as={'b'}
                  fontSize={'xl'}
                  position={'absolute'}
                  top={"calc(35vh + 35px)"}
                  left={"calc(6% + 145px)"}
               >
                  {userInfo.user.username}
               </Text>
               {userInfo.user.role &&
                  userInfo.user.role == 'admin' &&
                  <Text
                     fontSize={'md'}
                     position={'absolute'}
                     top={"calc(35vh + 65px)"}
                     left={"calc(6% + 145px)"}
                  >
                     Admin hệ thống
                  </Text>
               }
               {userInfo.user.role &&
                  userInfo.user.role == 'seller' &&
                  <Text
                     fontSize={'md'}
                     position={'absolute'}
                     top={"calc(35vh + 65px)"}
                     left={"calc(6% + 145px)"}
                  >
                     Người bán
                  </Text>
               }
               {userInfo.user.role &&
                  userInfo.user.role == 'buyer' &&
                  <Text
                     fontSize={'md'}
                     position={'absolute'}
                     top={"calc(35vh + 65px)"}
                     left={"calc(6% + 145px)"}
                  >
                     Người mua
                  </Text>
               }
            </Box>
         </Box>
         <Box
            marginX={"8"}
            mt={'10vh'}
         >
            {true && (
               <Tabs
                  padding={3}
                  onChange={(index) => updatePostList(index)}
                  bgColor={'white'}
               >
                  <TabList gap={"82px"}>
                     <Tab >Bài viết yêu thích</Tab>
                     {
                        userInfo.user.role != "buyer" &&
                        <Tab >Bài viết đã đăng</Tab>
                     }
                  </TabList>
                  <TabPanels>
                     <TabPanel>
                        {loading && <LoadingList />}
                        {!loading &&
                           <Grid
                              templateColumns={{
                                 base: "repeat(1, 1fr)",
                                 sm: "repeat(2, 1fr)",
                                 md: "repeat(3, 1fr)",
                                 lg: "repeat(4, 1fr)",
                              }}
                              gap={1}
                           >
                              {favouritePostList &&
                                 favouritePostList.length > 0 &&
                                 favouritePostList.map((post) => {
                                    return (
                                       <GridItem key={post.id}>
                                          <SinglePost post={post} />
                                       </GridItem>
                                    );
                                 })}
                           </Grid>
                        }
                        {favouritePostList &&
                           favouritePostList.length == 0 &&
                           "Danh sách bài viết ưa thích sẽ được hiển thị tại đây"}
                     </TabPanel>
                     {
                        userInfo.user.role != "buyer" &&
                        <TabPanel>
                           {loading && <LoadingList />}
                           {!loading &&
                              <Grid
                                 templateColumns={{
                                    base: "repeat(1, 1fr)",
                                    sm: "repeat(2, 1fr)",
                                    md: "repeat(3, 1fr)",
                                    lg: "repeat(4, 1fr)",
                                 }}
                                 gap={1}
                              >
                                 {createdPostList &&
                                    createdPostList.length > 0 &&
                                    createdPostList.map((post) => {
                                       return (
                                          <GridItem key={post.id}>
                                             <SinglePost post={post} />
                                          </GridItem>
                                       );
                                    })}
                              </Grid>
                           }
                           {createdPostList &&
                              createdPostList.length == 0 &&
                              "Danh sách bài viết đã viết sẽ được hiển thị tại đây"}
                        </TabPanel>
                     }

                  </TabPanels>
               </Tabs>
            )}
         </Box>

      </>
   )
};

export default ProfilePage;
