//create withComponent...
//next create wrapped component
//create withwrapped component

import { useEffect, useState } from "react";

function WithDataFetch(WrappedComponent, fetchData) {
  return function WithWrappedComp(props) {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchWrapper = async () => {
        try {
          const data = await fetchData(props);
          setData(data);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      };
      fetchWrapper();
    }, [props]);
    return (
      <WrappedComponent
        {...props}
        isLoading={isLoading}
        data={data}
        error={error}
      />
    );
  };
}

async function fetchPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
}

function PostComponent({ data, isLoading, error }) {
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div>
      {data.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

const WithPostComponent = WithDataFetch(PostComponent, fetchPost);

export default function Posts() {
  return <WithPostComponent />;
}
