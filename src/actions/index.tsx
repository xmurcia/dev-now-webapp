import axios from 'axios';

// tslint:disable-next-line: typedef
export const selectUser = (user_info: any) => {
  return {
    type: 'SELECT_USER',
    payload: user_info,
  };
};

// tslint:disable-next-line: typedef
export const fetchPosts = () => async (dispatch: any) => {
  const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');

  dispatch({ type: 'FETCH_POSTS', payload: posts.data });
};

// tslint:disable-next-line: typedef
export const addPost = (post_info: any) => {
  return { type: 'ADD_POST', payload: post_info };
};
