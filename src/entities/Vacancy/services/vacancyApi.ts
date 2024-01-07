import { db } from 'app/firebase'
import { doc, setDoc, getDocs, collection } from 'firebase/firestore'
import { type IVacancy } from '../types'

export const vacancyApi = {
  getAllVacancies: async () => {
    const vacanciesCollectionRef = collection(db, 'vacancies')
    const res = await getDocs(vacanciesCollectionRef)
    console.log('api-----------------', res)
    // console.log(response)
    // return response as IVacancy[]
    return res
  },
  addVacancy: async (vacancy: IVacancy) => {
    await setDoc(doc(db, 'vacancies'), vacancy)
  }
}
