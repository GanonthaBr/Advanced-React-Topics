import React from "react";
import { useAuthContext } from "../component/AuthProvider";

const HomePage = () => {
  const { loggedIn, currentUser, login, logout } = useAuthContext();
  return (
    <div>
      <h1>HomePage Component</h1>
      <div>
        {loggedIn ? (
          <h2>
            Welcome {currentUser.name} ({currentUser.email})
          </h2>
        ) : (
          <h2>Welcome Guest</h2>
        )}
      </div>

      <button onClick={() => (loggedIn ? logout() : login())}>
        {loggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default HomePage;
