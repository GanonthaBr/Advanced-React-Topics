import React from "react";
import { useState } from "react";
import { usePostContext } from "../components/Provider/PostsProvider";

const NewPost = () => {
  const { addPost } = usePostContext();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  //handle submit

  function handleSubmit(e) {
    e.preventDefault();
    const newPostToAdd = {
      title,
      content,
      author,
      color: false,
    };
    addPost(newPostToAdd);
    setAuthor("");
    setContent("");
    setTitle("");
  }

  return (
    <div>
      <h1>Add a new Post</h1>
      <form action="submit">
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <input
            type="text"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Post
        </button>
      </form>
    </div>
  );
};

export default NewPost;
