import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user'

const store = configureStore({
  reducer: {
    user: userReducer
  }
},
// @ts-expect-error ts-migrate(2554) FIXME: Expected 1 arguments, but got 2.
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store