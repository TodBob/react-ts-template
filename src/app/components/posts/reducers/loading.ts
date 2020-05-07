import { SET_POSTS_LOADING } from '../constants/index';

const initialState = false;

type loadingReducerType = {
  type: string,
  data?: boolean
}

export default (state = initialState, action: loadingReducerType) => (
  action.type === SET_POSTS_LOADING ? action.data : state
);
