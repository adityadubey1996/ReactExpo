import { takeEvery } from 'redux-saga/effects'
import { LoginSaga } from './LoginSaga'

export function* watchUserAuthentication() {
  yield takeEvery('LOGIN', LoginSaga)
}
