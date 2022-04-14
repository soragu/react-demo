import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userid: '',
  username: '',
  token: '',
  roles: [],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    SET_USER: (state, { payload }) => {
      state.username = payload.username
      state.userid = payload.userid
      state.roles = payload.roles
    },
    SET_TOKEN: (state, { payload }) => {
      state.token = payload.token
    },
    USER_LOGOUT: (state) => {
      state.userid = initialState.userid
      state.username = initialState.username
    },
  },
})

export const { SET_USER, SET_TOKEN, USER_LOGOUT } = userSlice.actions

export default userSlice.reducer
