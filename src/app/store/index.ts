import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../../entities/User/model/userSlice'
import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { vacanciesApi } from 'entities/Vacancy/api'
import { setupListeners } from '@reduxjs/toolkit/query'
export const store = configureStore({
  reducer: {
    user: userReducer,
    [vacanciesApi.reducerPath]: vacanciesApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(vacanciesApi.middleware),
  devTools: _IS_DEV_
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useTypedDispatch: () => AppDispatch = useDispatch
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
