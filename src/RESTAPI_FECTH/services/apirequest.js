import axios from "axios";

//FETCH METHOD
//get all posts

export const getData = async () => {
  const res = await fetch("http://localhost:4000/posts");
  const data = await res.json();
  return data;
};
//add a new post

export const postRequest = async (post) => {
  try {
    const res = await fetch("http://localhost:4000/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(post),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};

//remove a post
export const deletePost = async (id) => {
  try {
    await fetch(`http://localhost:4000/POSTS/${id}`, {
      method: "DELETE",
    });
  } catch (err) {
    throw err;
  }
};

//update
export const updatePost = async (id, updatedPost) => {
  try {
    const res = await fetch(`http://localhost:4000/POSTS/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedPost),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};

//GET
const client = axios.create({
  //create an axios instance
  baseURL: "http://localhost:4000/POSTS",
});
// export const getInstance = async () => {
//   const res = client.get().then((data) => data);
// };
/**
 * The function `getInstance` makes an asynchronous request to the `client` and returns the response.
 * @returns The response from the `client.get()` method is being returned.
 */
export const getInstance = async () => {
  try {
    const res = await client.get();
    return res;
  } catch (err) {
    console.log(err);
  }
};

/**
 * The function uses Axios to send a DELETE request to a specified endpoint with the given ID.
 * @param id - The `id` parameter is the identifier of the resource that you want to delete. It is used
 * to specify which resource should be deleted from the server.
 * @returns The response from the delete request is being returned.
 */
export const deletWithAxios = async (id) => {
  try {
    const res = await client.delete(`/${id}`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

//get profile
const client2 = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com/users`,
});

export const getProfile = async () => {
  try {
    const res = await client2.get();
    return res;
  } catch (err) {
    console.log(err);
  }
};
//delete person

const removeProfile = async (id) => {
  try {
    const res = await client2.delete(`/${id}`);
    return res;
  } catch (err) {
    console.log(err);
  }
};
