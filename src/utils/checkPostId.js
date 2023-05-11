export const checkPostId = (posts, postId) => {
  let check = false;
  posts.forEach((post) => {
    if (post.id === postId) {
      check = true;
    }
  });

  return check;
};
