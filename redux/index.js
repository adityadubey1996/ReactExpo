import { LoginReducer } from './reducers/Login'
import { combineReducers } from 'redux'
import { Loaderreducer } from './reducers/Loader'
export const rootReducer = combineReducers({ LoginReducer, Loaderreducer })
