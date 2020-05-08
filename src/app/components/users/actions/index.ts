import {
  FETCH_USERS,
  SET_USERS_ERROR,
  SET_USERS_LOADING,
  SET_USER_NAME,
} from '../constants';

type customProps = {
  data?: boolean
  payload?: Object
}


export const fetchUsers = () => (
  {
    type: FETCH_USERS,
  }
);

export const setUsersError = (payload: customProps) => (
  {
    type: SET_USERS_ERROR,
    data: payload,
  }
);

export const setUsersLoading = (payload: customProps) => (
  {
    type: SET_USERS_LOADING,
    data: payload,
  }
);

export const setUserName = (payload: customProps) => (
  {
    type: SET_USER_NAME,
    data: payload,
  }
);
