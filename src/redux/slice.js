import { createSlice } from '@reduxjs/toolkit'
const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    user: {},
  },
  reducers: {
    updateUser: (state, action) => {
      state.user = action.payload
    },
  },
})
export const { updateUser } = chatSlice.actions
export default chatSlice.reducer
