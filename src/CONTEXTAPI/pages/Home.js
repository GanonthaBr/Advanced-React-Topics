import React from "react";
import { useContext } from "react";
import { countContext } from "../component/Provider";

const Home = () => {
  const { count, setCount } = useContext(countContext);
  return (
    <div>
      <h1>Home Component</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>increase count</button>
    </div>
  );
};

export default Home;
