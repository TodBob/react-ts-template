import { createSelector } from 'reselect';

type customProps = {
  users?: Array<Object>,
  userError?: boolean,
  userLoading?: boolean,
  usersData?: Object,
  userName?: string
}

export const getUsersData: any = createSelector(
  (state: customProps) => state,
  (state: customProps) => state.usersData,
);

export const getUsers = createSelector(
  getUsersData,
  (state: customProps) => state.users,
);

export const getError = createSelector(
  getUsersData,
  (state: customProps) => state.userError,
);

export const getLoading = createSelector(
  getUsersData,
  (state: customProps) => state.userLoading,
);

export const getUserName = createSelector(
  getUsersData,
  (state: customProps) => state.userName,
);
