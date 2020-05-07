import { combineReducers } from 'redux';

/* USERS */
import users from './components/users/reducers/users';
import userError from './components/users/reducers/error';
import userLoading from './components/users/reducers/loading';
import userName from './components/users/reducers/userName';
/* POSTS */
import posts from './components/posts/reducers/posts';
import postsError from './components/posts/reducers/error';
import postsLoading from './components/posts/reducers/loading';
import postTitle from './components/posts/reducers/postTitle';
/* COMMENTS */
import comments from './components/comments/reducers/comments';
import commentsError from './components/comments/reducers/error';
import commentsLoading from './components/comments/reducers/loading';

const usersData = combineReducers({
  users,
  userError,
  userLoading,
  userName,
});

const postsData = combineReducers({
  posts,
  postsError,
  postsLoading,
  postTitle,
});

const commentsData = combineReducers({
  comments,
  commentsError,
  commentsLoading,
});

const rootReducer = combineReducers({
  usersData,
  postsData,
  commentsData,
});

export default rootReducer;
