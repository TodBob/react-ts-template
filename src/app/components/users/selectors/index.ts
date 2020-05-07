import { createSelector } from 'reselect';

type customProps = {
  users?: Array<Object>,
  error?: boolean,
  loading?: boolean,
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
  (state: customProps) => state.error,
);

export const getLoading = createSelector(
  getUsersData,
  (state: customProps) => state.loading,
);

export const getUserName = createSelector(
  getUsersData,
  (state: customProps) => state.userName,
);
