import { SET_POSTS_DATA } from '../constants/index';

const initialState = null;

type postsReducerType = {
  type: string,
  data?: any
}

export default (state = initialState, action: postsReducerType) => (
  action.type === SET_POSTS_DATA ? action.data : state
);
