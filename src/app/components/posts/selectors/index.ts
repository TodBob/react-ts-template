import { createSelector } from 'reselect';

type customProps = {
  posts?: Array<Object>,
  postsError?: boolean,
  postsLoading?: boolean,
  postsData?: Object,
  postTitle?: string
}

export const getPostsData: any = createSelector(
  (state: customProps) => state,
  (state: customProps) => state.postsData,
);

export const getPosts = createSelector(
  getPostsData,
  (state: customProps) => state.posts,
);

export const getError = createSelector(
  getPostsData,
  (state: customProps) => state.postsError,
);

export const getLoading = createSelector(
  getPostsData,
  (state: customProps) => state.postsLoading,
);

export const getPostTitle = createSelector(
  getPostsData,
  (state: customProps) => state.postTitle,
);
