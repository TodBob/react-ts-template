import { SET_COMMENTS_ERROR } from '../constants/index';

const initialState = false;

type errorReducerType = {
  type: string,
  data?: boolean
}

export default (state = initialState, action: errorReducerType) => (
  action.type === SET_COMMENTS_ERROR ? action.data : state
);
