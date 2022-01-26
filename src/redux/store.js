import { configureStore } from '@reduxjs/toolkit'
import chatReducer from './slice'
export default configureStore({
  reducer: {
    chatReducer,
  },
})
