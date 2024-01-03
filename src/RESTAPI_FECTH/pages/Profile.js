import React from "react";

import { usePostContext } from "../components/Provider/PostsProvider";

const Profile = () => {
  const { profile } = usePostContext();

  return (
    <div>
      <h1>Profile Component</h1>
      {profile.map((person) => (
        <div key={person.id}>
          <p>Name: {person.name}</p>
          <p>Email: {person.email}</p>
          <p>Location: {person.location}</p>
        </div>
      ))}
    </div>
  );
};

export default Profile;
