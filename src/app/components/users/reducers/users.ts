import { SET_USERS_DATA } from '../constants/index';

const initialState = null;

type usersReducerType = {
  type: string,
  data?: any
}

export default (state = initialState, action: usersReducerType) => (
  action.type === SET_USERS_DATA ? action.data : state
);
