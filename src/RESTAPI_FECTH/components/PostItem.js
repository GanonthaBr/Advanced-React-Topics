import React from "react";
import { useState } from "react";
import { usePostContext } from "./Provider/PostsProvider";

const PostItem = (props) => {
  const { removePost, updatPost } = usePostContext();
  const [colore, setColor] = useState(false);
  const { id, author, title, content, color } = props.post;

  function handleChange(id) {
    setColor(!colore);
    const newPost = {
      id,
      author,
      title,
      content,
      color: colore,
    };

    updatPost(id, newPost);
  }
  return (
    <div className="post-item" onDoubleClick={() => handleChange(id)}>
      <h1>{title}</h1>
      <p>{content}</p>
      <div className="new-post">
        <h6>{author}</h6>
        <button onClick={() => removePost(id)}>
          {" "}
          {colore ? "hahah" : "Delete"}{" "}
        </button>
      </div>
    </div>
  );
};

export default PostItem;
