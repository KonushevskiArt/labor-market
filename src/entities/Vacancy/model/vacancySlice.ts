import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { type IVacancy } from '../types'

export interface VacancyState {
  vacancies: IVacancy[]
}

const initialState: VacancyState = {
  vacancies: []
}

export const VacancySlice = createSlice({
  name: 'vacancy',
  initialState,
  reducers: {
    addVacancy: (state, action: PayloadAction<IVacancy>) => {
      state.vacancies.push(action.payload)
    },
    updateVacancyById: (state, action: PayloadAction<IVacancy>) => {
      state.vacancies = state.vacancies.map((vacancy): IVacancy => {
        if (vacancy.id === action.payload.id) {
          return action.payload
        }
        return vacancy
      })
    },
    removeVacancyById: (state, action: PayloadAction<string>) => {
      state.vacancies = state.vacancies.filter((vacancy) => vacancy.id !== action.payload)
    }
  }
})

export const { addVacancy, updateVacancyById, removeVacancyById } = VacancySlice.actions

export default VacancySlice.reducer
