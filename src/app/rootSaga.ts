import { all } from 'redux-saga/effects';
import usersSagas from './components/users/sagas';
import postsSagas from './components/posts/sagas';
import commentsSagas from './components/comments/sagas';

export default function* rootSaga() {
  yield all([
    ...usersSagas,
    ...postsSagas,
    ...commentsSagas,
  ]);
}
