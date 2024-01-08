import React from "react";
import { useQuery } from "@apollo/client";
import { FILMS_QUERY } from "../dataPoints";

const HomeGrapHQL = () => {
  const { data, loading, error } = useQuery(FILMS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <h1>{error.message}</h1>;
  return (
    <div>
      <h1>spaceX launches</h1>
      <ul>
        {data.launchesPast.map((launch) => {
          <li key={launch.id}>{launch.mission_name}</li>;
        })}
      </ul>
    </div>
  );
};

export default HomeGrapHQL;
