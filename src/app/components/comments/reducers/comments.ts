import { SET_COMMENTS_DATA } from '../constants/index';

const initialState = null;

type commentsReducerType = {
  type: string,
  data?: any
}

export default (state = initialState, action: commentsReducerType) => (
  action.type === SET_COMMENTS_DATA ? action.data : state
);
