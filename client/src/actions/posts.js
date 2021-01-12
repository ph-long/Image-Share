import * as api from '../api';
import {FETCH_ALL, CREATE, UPDATE, DELETE, LIKE} from "../constants/actionTypes"
// Action Creators
// Prepares actions for reducers using the api

// Since using the api, function is async written as such
export const getPosts = () => async (dispatch) => {
    try { 
        const {data} = await api.fetchPosts();
        const action = {
            type: FETCH_ALL,
            // Saves the get(from server) of post into payload
            payload: data
        }
        // dispatch calls on the reducer
        dispatch(action);
    } catch(error) {
        console.log(error)
    }
}

export const createPost = (post) => async(dispatch) => {
    try {
        const {data} = await api.createPost(post);
        const action = {
            type: CREATE,
            payload: data
        }
        dispatch(action);
    } catch (error) {
        console.log(error)
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
      const { data } = await api.updatePost(id, post);
      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  export const deletePost = (id) => async (dispatch) => {
      try {
        // Not interested in return
        await api.deletePost(id);
        dispatch({type: DELETE, payload: id})
      } catch (error) {
          console.log(error);
      }
  };

export const likePost = (id) => async (dispatch) => {
      try {
        const { data } = await api.likePost(id);
        dispatch({ type: LIKE, payload: data });
      } catch (error) {
        console.log(error);
      }
  }
  