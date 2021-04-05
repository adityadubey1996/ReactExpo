import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from '../../../redux'
import { rootSaga } from '../../sagas'
import createSagaMiddleware from 'redux-saga'
import AsyncStorage from '@react-native-community/async-storage'

export default function configureStore() {
  function saveToStorage(state) {
    try {
      const serializedState = JSON.stringify(state)

      AsyncStorage.setItem('state', serializedState)
    } catch (e) {
      console.log(e)
    }
  }

  function loadFromStorage() {
    try {
      const serializedState = AsyncStorage.getItem('state')

      if (serializedState == null) return undefined
      return JSON.parse(serializedState)
    } catch (e) {
      return undefined
    }
  }

  const persistStorage = loadFromStorage()
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    rootReducer,
    persistStorage,

    applyMiddleware(sagaMiddleware)
  )

  store.subscribe(() => saveToStorage(store.getState()))

  sagaMiddleware.run(rootSaga)
  return store

  // return { store, runSaga: sagaMiddleware.run(rootSaga) };
}
