import { SET_USER_NAME } from '../constants/index';

const initialState = null;

type nameReducerType = {
  type: string,
  data?: string
}

export default (state = initialState, action: nameReducerType) => (
  action.type === SET_USER_NAME ? action.data : state
);
