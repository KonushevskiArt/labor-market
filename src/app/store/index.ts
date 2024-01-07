import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import userReducer from '../../entities/User/model/userSlice'
import vacancyReducer from 'entities/Vacancy/model/vacancySlice'
import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { vacanciesApi } from 'entities/Vacancy/api'
import { setupListeners } from '@reduxjs/toolkit/query'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    vacancy: vacancyReducer,
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
