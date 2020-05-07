import { FETCH_POSTS, SET_POST_TITLE, SET_POSTS_ERROR } from '../constants';

type customProps = {
    payload?: Object
  }

export const fetchPosts = (payload: customProps) => (
  {
    type: FETCH_POSTS,
    data: payload,
  }
);


export const setPostTitle = (payload: customProps) => (
  {
    type: SET_POST_TITLE,
    data: payload,
  }
);

export const setError = (payload: customProps) => (
  {
    type: SET_POSTS_ERROR,
    data: payload,
  }
);
