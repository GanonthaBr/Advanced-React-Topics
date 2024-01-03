import React from "react";
import Posts from "./Posts";
import NewPost from "./NewPost";
import Profile from "./Profile";

const Home = () => {
  return (
    <div>
      {/* Menu */}
      <div className="menu">
        <ul>
          <li>Home</li>
          <li>About</li>
        </ul>
      </div>
      <NewPost />
      <Posts />
      <Profile />
    </div>
  );
};

export default Home;
