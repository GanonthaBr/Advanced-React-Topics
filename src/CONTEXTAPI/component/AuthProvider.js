import { createContext, useContext, useState } from "react";
import React from "react";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [loggedIn, setLogin] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: "Paul",
    email: "pall@gmail.com",
    status: loggedIn,
  });

  //function to logout
  const logout = () => {
    setLogin(false);
    setCurrentUser("");
  };
  //function to login
  const login = () => {
    setLogin(true);
    setCurrentUser(currentUser);
  };

  return (
    <AuthContext.Provider
      value={{ loggedIn, setLogin, currentUser, setCurrentUser, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export const useAuthContext = () => useContext(AuthContext);
