import React from "react";
import { usePostContext } from "../components/Provider/PostsProvider";
import PostItem from "../components/PostItem";

const Posts = () => {
  const { posts, Load, appState } = usePostContext();

  return (
    <div className="post">
      <h1 id="h1">All Posts</h1>
      {<Load isLoading={appState.isLoading} data={appState.data} />}
      {posts.length > 0
        ? posts.map((post) => <PostItem post={post} key={post.id} />)
        : "no post available"}
    </div>
  );
};

export default Posts;
