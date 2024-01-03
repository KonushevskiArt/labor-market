import { useTypedSelector } from 'app/store'

export interface IAuth {
  isAuth: boolean
  email: string
  token: string
  uid: string
}

export const useAuth = (): IAuth => {
  const { email, token, uid } = useTypedSelector(state => state.user)

  return {
    isAuth: Boolean(email),
    email,
    token,
    uid
  }
}
