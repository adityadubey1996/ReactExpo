import React from 'react'
import ProjectSettings from '../../Global'
import { put, call } from 'redux-saga/effects'
import { useDispatch, useSelector } from 'react-redux'
import { LoaderShow, LoaderHide } from '../actions/Loader'
// const dispatch = useDispatch()
const Login = (payload) => {
  const API = `${ProjectSettings.baseURL}/api/auth/login`
  let DatatoSend = {
    email: payload.email,
    password: payload.password,
  }
  console.log('Login -> DatatoSend', DatatoSend)
  // dispatch(LoaderShow())
  return fetch(API, {
    method: 'POST',
    body: JSON.stringify(DatatoSend),
    headers: {
      //Header Defination
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson
    })
    .catch((error) => {
      console.log('Login -> error', error)
    })
}

export function* LoginSaga(payload) {
  console.log('LoginSaga -> payload 25', payload)
  yield put(LoaderShow())
  try {
    const Response = yield call(Login, payload)

    if (Response.sucees) {
      // dispatch(LoaderHide())
      yield put({ type: 'LOGIN_USER_SUCCESFUL', Response })

      yield put(LoaderHide())
    } else {
      // dispatch(LoaderHide())

      yield put({ type: 'LOGIN_USER_ERROR', Response })
      yield put(LoaderHide())
    }
  } catch (error) {
    // dispatch(LoaderHide())

    console.log('function*LoginSaga -> error 36', error)
    yield put({ type: 'LOGIN_USER_ERROR_BEFORE', error })
    yield put(LoaderHide())
  }
}
