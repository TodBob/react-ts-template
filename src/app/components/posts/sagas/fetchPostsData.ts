import { put } from 'redux-saga/effects';
import { POSTS_API } from '../../../../http/api';
import { SET_POSTS_DATA, SET_POSTS_ERROR, SET_POSTS_LOADING } from '../constants';


export function* fetchPostsSaga({ data }: any) {
  yield put({ type: SET_POSTS_LOADING, data: true });
  yield put({ type: SET_POSTS_DATA, data: null });

  try {
    const response = yield fetch(`${POSTS_API}${data.toString()}`);
    const result = yield response.json();
    if (!result.length) {
      throw new Error('');
    }
    yield put({ type: SET_POSTS_DATA, data: result });
  } catch (e) {
    yield put({ type: SET_POSTS_ERROR, data: true });
  }

  yield put({ type: SET_POSTS_LOADING, data: false });
}
