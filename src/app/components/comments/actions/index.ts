import { FETCH_COMMENTS, SET_COMMENTS_ERROR } from '../constants';

type customProps = {
    data: Object
    payload?: Object
  }

export const fetchComments = (payload: customProps) => (
  {
    type: FETCH_COMMENTS,
    data: payload,
  }
);

export const setError = (payload: customProps) => (
  {
    type: SET_COMMENTS_ERROR,
    data: payload,
  }
);
