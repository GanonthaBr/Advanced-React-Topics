import { createContext, useState, useContext, useEffect } from "react";
import {
  deletePost,
  getData,
  postRequest,
  updatePost,
} from "../../services/apirequest";
import WithListLoading from "../../services/HigherOrderComponent";
import Loading from "../Loading";

const PostContext = createContext(undefined);
const PostsProvider = ({ children }) => {
  const [posts, setPost] = useState([]);
  const [appState, setAppState] = useState({
    isLoading: false,
    data: null,
  });
  const Load = WithListLoading(Loading);

  //get data from api
  useEffect(() => {
    setAppState({ isLoading: true });
    const getPost = async () => {
      const res = await getData();
      setPost(res);
      setAppState({ isLoading: false, data: res });
    };
    getPost();
  }, [setAppState]);

  //add a new post
  const addPost = async (post) => {
    const data = await postRequest(post);
    setPost([...posts, data]);
  };
  //delete a post

  const removePost = async (id) => {
    await deletePost(id);
    setPost(posts.filter((post) => post.id != id));
  };
  //update a post
  const updatPost = async (id, post) => {
    const data = await updatePost(id, post);
    setPost(posts.map((post) => (post.id === id ? data : post)));
  };
  return (
    <PostContext.Provider
      value={{ posts, Load, appState, addPost, removePost, updatPost }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostsProvider;
export const usePostContext = () => useContext(PostContext);
