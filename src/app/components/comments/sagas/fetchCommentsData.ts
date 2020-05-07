import { put } from 'redux-saga/effects';
import { COMMENTS_API } from '../../../../http/api';
import { SET_COMMENTS_DATA, SET_COMMENTS_ERROR, SET_COMMENTS_LOADING } from '../constants';


export function* fetchCommentsSaga({ data }: any) {
  yield put({ type: SET_COMMENTS_LOADING, data: true });
  yield put({ type: SET_COMMENTS_DATA, data: null });
  try {
    const response = yield fetch(`${COMMENTS_API}${data.toString()}`);
    const result = yield response.json();
    if (!result.length) {
      throw new Error('');
    }
    yield put({ type: SET_COMMENTS_DATA, data: result });
  } catch (e) {
    yield put({ type: SET_COMMENTS_ERROR, data: true });
  }

  yield put({ type: SET_COMMENTS_LOADING, data: false });
}
