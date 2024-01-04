import { useEffect } from "react";
import { useUser } from "./useUser";

export const useAuth = () => {
  const { user, addUser, removeUser } = useUser();

  useEffect(() => {
    const user = "user";
    if (user) {
      addUser(JSON.parse(user));
    }
  }, []);
  //login
  const login = (user) => {
    addUser(user);
  };
  //logout
  const logout = () => {
    removeUser();
  };

  return { user, login, logout };
};
