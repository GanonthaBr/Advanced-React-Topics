import React from "react";
import { useParams } from "react-router-dom";
import { BlogPosts } from "./HomeReactRouter";

const Post = () => {
  const { id } = useParams();
  const post = BlogPosts[id];
  if (!post) return <div>Not Found</div>;
  const { title, content } = post;
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default Post;
