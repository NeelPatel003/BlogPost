//import actions Types
import * as Actions from "../actions/index";
//declare initialState variables
const initialState = {
  loading: false,
  getPost: [],
   addPost: [],
   postId: "",
};

const albums = function (state = initialState, action) {
  switch (action.type) {
    case Actions.GET_POST_LOAD: {
      return {
        ...state,
        loading: true,
      };
    }

    //get user Types and return statement
    case Actions.GET_POST: {
      return {
        ...state,
        getPost: action?.payload,
        loading: true,
      };
    }
  
    case Actions.ADD_POSTS: {
      return {
        ...state,
        addPost: state.getPost.push(action.payload),
        loading: true,
      };
    }
    case "DELETE_POSTS_LIST": {
      const existingUser = state.getPost.find(
        (user) => user.id === action.payload
      );
      if (existingUser) {
        state.getPost = state.getPost.filter(
          (user) => user.id !== action.payload
        );
      }
      return {
        ...state,
        loading: true,
      };
    }
   
    case Actions.UPDATE_POSTS: {
        
      const { id, title, body } = action.payload;
      const existingUser = state.getPost.find((user) => user.id === id);
      if (existingUser) {
        existingUser.title = title;
        existingUser.body = body;
      }
      return {
        ...state,
        loading: true,
      };
    }
    //store user id for update user
    case "POST_ID": {
      return {
        ...state,
        postId: action.payload,
        loading: true,
      };
    }

    case Actions.POST_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }

    default: {
      return state;
    }
  }
};
export default albums;