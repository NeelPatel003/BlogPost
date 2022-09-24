import axios from "axios";

//get user api call
export const getPosts = () =>
  new Promise((resolve, reject) =>
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject({ message: `Something Went Wrong` });
      })
  );


  //add posts api call
export const addPosts = (data) =>
new Promise((resolve, reject) =>
  axios
    .post(`https://jsonplaceholder.typicode.com/posts`, data)
    .then((response) => {
      resolve(response.data);
    })
    .catch((error) => {
      reject({ message: `Something Went Wrong` });
    })
);

export const updatePosts = (id) =>
  new Promise((resolve, reject) =>
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${id.id}`, id)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject({ message: `Something Went Wrong` });
      })
  );