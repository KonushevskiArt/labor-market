import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

console.log(process.env.API_KEY)
console.log(process.env.AUTH_DOMAIN)
console.log(process.env)

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGE_SENDER_ID,
  appId: process.env.APP_ID
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
