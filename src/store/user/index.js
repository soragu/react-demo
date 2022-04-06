import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userid: '',
	username: '',
  token: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    USER_LOGIN: (state, action) => {
      state.username = action.payload.username
      state.userid = action.payload.userid
      state.token = action.payload.token
    },
    USER_LOGOUT: (state) => {
      state.userid = initialState.userid
      state.username = initialState.username
      state.token = initialState.token
    },
  },
})

export const { USER_LOGIN, USER_LOGOUT } = userSlice.actions

export default userSlice.reducer