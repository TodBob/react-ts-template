
import { SET_POST_TITLE } from '../constants/index';

const initialState = null;

type titleReducerType = {
  type: string,
  data?: string
}

export default (state = initialState, action: titleReducerType) => (
  action.type === SET_POST_TITLE ? action.data : state
);
