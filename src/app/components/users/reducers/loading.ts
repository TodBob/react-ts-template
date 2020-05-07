import { SET_USERS_LOADING } from '../constants/index';

const initialState = false;

type loadingReducerType = {
  type: string,
  data?: boolean
}

export default (state = initialState, action: loadingReducerType) => (
  action.type === SET_USERS_LOADING ? action.data : state
);
