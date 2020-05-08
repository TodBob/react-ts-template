import { put } from 'redux-saga/effects';
import { USERS_API } from '../../../../http/api';
import { SET_USERS_DATA, SET_USERS_ERROR, SET_USERS_LOADING } from '../constants';

export function* fetchUsersSaga() {
  yield put({ type: SET_USERS_ERROR, data: false });
  yield put({ type: SET_USERS_LOADING, data: true });

  try {
    const response = yield fetch(USERS_API);
    const result = yield response.json();

    if (!Array.isArray(result)) {
      yield put({ type: SET_USERS_DATA, data: [] });
      throw new Error('');
    }
    yield put({ type: SET_USERS_DATA, data: result });
  } catch (e) {
    yield put({ type: SET_USERS_ERROR, data: true });
  }
  yield put({ type: SET_USERS_LOADING, data: false });
}
