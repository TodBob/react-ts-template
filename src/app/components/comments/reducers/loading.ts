import { SET_COMMENTS_LOADING } from '../constants/index';

const initialState = false;

type loadingReducerType = {
  type: string,
  data?: boolean
}

export default (state = initialState, action: loadingReducerType) => (
  action.type === SET_COMMENTS_LOADING ? action.data : state
);
