import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import { addDoc, collection, deleteDoc, doc, getDocs, serverTimestamp, updateDoc } from 'firebase/firestore'
import { db } from 'app/firebase'
import { type IVacancy, type INewVacancy } from 'entities/Vacancy/types'

export const vacanciesApi = createApi({
  reducerPath: 'vacancyApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Vacancies'],
  endpoints: (builder) => ({
    fetchVacancies: builder.query({
      async queryFn () {
        try {
          const vacanciesRef = collection(db, 'vacancies')
          const querySnapshot = await getDocs(vacanciesRef)
          const vacancies = [] as any
          //  add validation of the response
          querySnapshot?.forEach((doc) => {
            vacancies.push({
              id: doc.id,
              ...doc.data()
            })
          })
          const TypedVacancies = vacancies as IVacancy[]
          return { data: TypedVacancies }
        } catch (error) {
          return { error }
        }
      },
      providesTags: ['Vacancies']
    }),
    addVacancy: builder.mutation({
      async queryFn (data: INewVacancy) {
        try {
          await addDoc(collection(db, 'vacancies'), data)
          console.log('vacancy added successfyly')
          return { data: 'ok' }
        } catch (error) {
          return error
        }
      },
      invalidatesTags: ['Vacancies']
    }),
    removeVacancy: builder.mutation({
      async queryFn (id: string) {
        try {
          await deleteDoc(doc(db, 'vacancies', id))
          return { data: 'ok' }
        } catch (error) {
          return error
        }
      },
      invalidatesTags: ['Vacancies']
    }),
    updateVacancy: builder.mutation({
      async queryFn ({ id, vacancy }: { id: string, vacancy: INewVacancy }) {
        try {
          await updateDoc(doc(db, 'vacancies', id), {
            ...vacancy,
            timestamp: serverTimestamp()
          })
          return { data: 'ok' }
        } catch (error) {
          return error
        }
      },
      invalidatesTags: ['Vacancies']
    })
  })
})

export const {
  useFetchVacanciesQuery,
  useAddVacancyMutation,
  useRemoveVacancyMutation,
  useUpdateVacancyMutation
} = vacanciesApi
