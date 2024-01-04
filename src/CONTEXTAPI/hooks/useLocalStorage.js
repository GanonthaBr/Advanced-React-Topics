import { useState } from "react";
export const useLocalStorage = () => {
  const [value, setValue] = useState(null);
  // Function to save the value in local storage
  function setItem(key, value) {
    // if(!window.localStorage) return;
    // window.localStorage.setItem(key, JSON.stringify(item))
    // setValue(JSON.parse(window.localStorage.getItem(key)))
    localStorage.setItem(key, value);
    setValue(value);
  }
  // Function to get the value from local storage
  function getItem(key) {
    const value = localStorage.getItem(key);
    setValue(item);
    return value;
  }
  //functions to remove item
  function removeItem(key) {
    localStorage.removeItem(key);
    setValue(null);
  }
  //return
  return { value, setItem, getItem, removeItem };
};
