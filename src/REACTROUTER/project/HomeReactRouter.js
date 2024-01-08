import React from "react";
import Services from "./Services";
import Posts from "./Posts";
import { Link, Route, Routes } from "react-router-dom";
import HomePageRR from "./HomePageRR";
import NoMatch from "./NoMatch";
import PostsList from "./PostsList";
import Post from "./Post";

export const BlogPosts = [
  {
    id: "post-one",
    title: "Post one",
    content: "This is the first post from the blog",
  },
  {
    id: "post-two",
    title: "Post two",
    content: "This is the second post from the blog",
  },
];

const HomeReactRouter = () => {
  return (
    <>
      <nav className="nav-bar-react-router">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/posts">Posts</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePageRR />} />
        <Route path="/services" element={<Services />} />
        <Route path="/posts/" element={<Posts />}>
          <Route index element={<PostsList />} />
          <Route path=":id" element={<Post />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
};

export default HomeReactRouter;
