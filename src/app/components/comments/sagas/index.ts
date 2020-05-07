import { takeLatest } from 'redux-saga/effects';
import { FETCH_COMMENTS } from '../constants';
import { fetchCommentsSaga } from './fetchCommentsData';

const commentsSagas = [
  takeLatest(FETCH_COMMENTS, fetchCommentsSaga),
];

export default commentsSagas;
