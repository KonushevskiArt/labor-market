import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import userReducer from './slices/userSlice'
import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer
  },
  devTools: _IS_DEV_
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useTypedDispatch: () => AppDispatch = useDispatch
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
