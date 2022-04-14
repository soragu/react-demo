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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch