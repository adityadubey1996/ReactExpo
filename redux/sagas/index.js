import {fork, all} from 'redux-saga/effects';
import {watchUserAuthentication} from './watcher';

export function* rootSaga() {
  yield all([watchUserAuthentication()]);
}
