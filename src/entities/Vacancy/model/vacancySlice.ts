import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { type IVacancy } from '../types'
import { vacancyApi } from '../services/vacancyApi'

export type FetchStatus = 'loading' | 'error' | 'success' | 'idle'

export interface VacancyState {
  vacancies: IVacancy[]
  fetchVacanciesStatus: FetchStatus
  fetchVacanciesError: string
  fetchAddVacancyStatus: FetchStatus
  fetchAddVacancyError: string
}

const initialState: VacancyState = {
  vacancies: [],
  fetchVacanciesStatus: 'idle',
  fetchVacanciesError: null,
  fetchAddVacancyStatus: 'idle',
  fetchAddVacancyError: null
}

export const fetchVacancies = createAsyncThunk('vacancies/fetchVacancies', async () => {
  // const response = await vacancyApi.getAllVacancies()
  // console.log(response)
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const mock: IVacancy[] = {} as IVacancy[]
  return mock
})

export const fetchAddVacancy = createAsyncThunk('vacancies/fetchAddVacancy', async (vacancy: IVacancy) => {
  await vacancyApi.addVacancy(vacancy)
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const mock: IVacancy = {} as IVacancy
  return mock
})

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
  },
  extraReducers (builder) {
    builder
      .addCase(fetchVacancies.pending, (state) => {
        state.fetchVacanciesStatus = 'loading'
      })
      .addCase(fetchVacancies.fulfilled, (state, action) => {
        state.fetchVacanciesStatus = 'success'
        state.vacancies = state.vacancies.concat(action.payload)
      })
      .addCase(fetchVacancies.rejected, (state, action) => {
        state.fetchVacanciesStatus = 'error'
        state.fetchVacanciesError = action.error.message
      })

      .addCase(fetchAddVacancy.pending, (state) => {
        state.fetchAddVacancyStatus = 'loading'
      })
      .addCase(fetchAddVacancy.fulfilled, (state, action) => {
        state.fetchAddVacancyStatus = 'success'
        state.vacancies = state.vacancies.concat(action.payload)
      })
      .addCase(fetchAddVacancy.rejected, (state, action) => {
        state.fetchAddVacancyStatus = 'error'
        state.fetchAddVacancyError = action.error.message
      })
  }
})

export const { addVacancy, updateVacancyById, removeVacancyById } = VacancySlice.actions

export default VacancySlice.reducer
