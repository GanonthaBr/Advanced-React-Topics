import React from "react";
import { BlogPosts } from "./HomeReactRouter";
import { Link } from "react-router-dom";

const PostsList = () => {
  return (
    <div>
      <ul>
        {Object.entries(BlogPosts).map(([id, { title }]) => (
          <li key={id}>
            <Link to={`/posts/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
