import { createSelector } from 'reselect';

type customProps = {
  comments?: Array<Object>,
  commentsError?: boolean,
  commentsLoading?: boolean,
  commentsData?: Object,
}

export const getCommentsData: any = createSelector(
  (state: customProps) => state,
  (state: customProps) => state.commentsData,
);

export const getComments = createSelector(
  getCommentsData,
  (state: customProps) => state.comments,
);

export const getError = createSelector(
  getCommentsData,
  (state: customProps) => state.commentsError,
);

export const getLoading = createSelector(
  getCommentsData,
  (state: customProps) => state.commentsLoading,
);
