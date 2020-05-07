import { takeLatest } from 'redux-saga/effects';
import { FETCH_USERS } from '../constants';
import { fetchUsersSaga } from './fetchUsersSaga';

const usersSagas = [
  takeLatest(FETCH_USERS, fetchUsersSaga),
];

export default usersSagas;
