import { takeLatest } from 'redux-saga/effects';
import { FETCH_POSTS } from '../constants';
import { fetchPostsSaga } from './fetchPostsData';

const postsSagas = [
  takeLatest(FETCH_POSTS, fetchPostsSaga),
];

export default postsSagas;
