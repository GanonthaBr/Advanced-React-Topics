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
