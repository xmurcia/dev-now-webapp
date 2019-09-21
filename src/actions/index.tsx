import axios from 'axios';

export const selectUser = (user_info: any) => {
  return {
    type: 'SELECT_USER',
    payload: user_info
  };
};

export const fetchPosts = () => async (dispatch: any) => {
  const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');

  dispatch({type: 'FETCH_POSTS', payload: posts.data});
};

export const addPost = (post_info: any) => {
  return { type: 'ADD_POST', payload: post_info };
}

