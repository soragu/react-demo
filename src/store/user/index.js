import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	username: '',
	password: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.username = action.payload.username
      state.password = action.payload.password
    },
    logout: (state) => {
      state.username = initialState.username
      state.password = initialState.password
    },
  },
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer