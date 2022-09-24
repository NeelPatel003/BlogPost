//import Service function
import { getPosts,addPosts,updatePosts } from "../../services/index";

//export Types for reducer
export const GET_POST_LOAD = "[USER] GET_POST_LOAD";
export const GET_POST = "[USER] GET_POST";
export const ADD_POSTS = "[USER] ADD_POSTS";
export const UPDATE_POSTS = "[USER] UPDATE_POSTS";
export const POST_ERROR = "[USER] POST_ERROR";

//export action for get user
export function handlePostLists() {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_POST_LOAD,
        payload: true,
      });
      const response = await getPosts();
      console.log("response",response)
      dispatch({
        type: GET_POST,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: POST_ERROR,
        payload: { errorMessage: error.message },
      });
    }
  };
}

export function handleAddPosts(value) {
    return async (dispatch) => {
      try {
        dispatch({
          type: GET_POST_LOAD,
          payload: true,
        });
        const response = await addPosts(value);
        dispatch({
          type: ADD_POSTS,
          payload: response,
        });
      } catch (error) {
        dispatch({
          type: POST_ERROR,
          payload: { errorMessage: error.message },
        });
      }
    };
  }


  export function handleUpdatePosts(value) {
    return async (dispatch) => {
      try {
        dispatch({
          type: GET_POST_LOAD,
          payload: true,
        });
        const response = await updatePosts(value);
        dispatch({
          type: UPDATE_POSTS,
          payload: response,
        });
      } catch (error) {
        dispatch({
          type: POST_ERROR,
          payload: { errorMessage: error.message },
        });
      }
    };
  }