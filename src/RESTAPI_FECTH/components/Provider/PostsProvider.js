import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
// const { axios } = require("axios");
import {
  deletWithAxios,
  deletePost,
  getData,
  getInstance,
  getProfile,
  postRequest,
  updatePost,
} from "../../services/apirequest";
import WithListLoading from "../../services/HigherOrderComponent";
import Loading from "../Loading";

const PostContext = createContext(undefined);
const PostsProvider = ({ children }) => {
  const [posts, setPost] = useState([]);
  const [profile, setProfile] = useState([]);
  const [appState, setAppState] = useState({
    isLoading: false,
    data: null,
  });
  /* The line `const Load = WithListLoading(Loading);` is creating a new component called `Load` by
 wrapping the `Loading` component with the `WithListLoading` higher-order component. */
  const Load = WithListLoading(Loading);

  //get data from api FETCh
  // useEffect(() => {
  //   setAppState({ isLoading: true });
  //   const getPost = async () => {
  //     const res = await getData();
  //     setPost(res);
  //     setAppState({ isLoading: false, data: res });
  //   };
  //   getPost();
  // }, [setAppState]);
  //get data from api AXIOS

  //AXIOS

  const client = axios.create({
    //create an axios instance
    baseURL: "http://localhost:4000/POSTS",
  });
  /* The `useEffect` hook is used to perform side effects in a functional component. In this case, it is
used to fetch data from an API using the `getInstance` function and update the state of the
component. */

  useEffect(() => {
    const getData = async () => {
      setAppState({ isLoading: true });
      const res = await getInstance();
      setPost(res.data);
      setAppState({ isLoading: false, data: res.data });
    };
    const getPerson = async () => {
      const resp = await getProfile();
      setProfile(resp.data);
    };
    getData();
    getPerson();
  }, [setAppState]);
  //add a new post
  async function addPost(post) {
    const data = await postRequest(post);
    setPost([...posts, data]);
  }
  //delete a post

  const removePost = async (id) => {
    // await deletePost(id);
    // setPost(posts.filter((post) => post.id != id));
    await deletWithAxios(id);
    setPost(posts.filter((post) => post.id != id));
  };
  //update a post
  const updatPost = async (id, post) => {
    const data = await updatePost(id, post);
    setPost(posts.map((post) => (post.id === id ? data : post)));
  };
  return (
    <PostContext.Provider
      value={{ posts, Load, appState, addPost, removePost, updatPost, profile }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostsProvider;
export const usePostContext = () => useContext(PostContext);
