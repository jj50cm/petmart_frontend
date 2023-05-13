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
   Image
} from "@chakra-ui/react";
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
      console.log('Update postList');

      if (index == 1) {
         const newCreatedList = createdPostList;
         dispatch(setCreatedPostList(newCreatedList));
         console.log(newCreatedList);
      }
      else {
         const newFavouriteList = favouritePostList;
         dispatch(setFavouritePostList(newFavouriteList));
         console.log(newFavouriteList);
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
            
         </Box>
         <Box marginX={"8"}>
            {true && (
               <Tabs
                  padding={3}
                  onChange={(index) => updatePostList(index)}
                  bgColor={'white'}
               >
                  <TabList gap={"82px"}>
                     <Tab >Bài viết yêu thích</Tab>
                     <Tab >Bài viết đã đăng</Tab>
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
                              createdPostList.lengh == 0 && 
                              "Danh sách bài viết ưa thích sẽ được hiển thị tại đây"}
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
                     </TabPanel>
                  </TabPanels>
               </Tabs>
            )}
         </Box>

      </>
   )
};

export default ProfilePage;
