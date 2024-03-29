import cls from './LoginForm.module.scss'
import { type Dispatch, type SetStateAction, type FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { Button } from 'antd'
import { LoginOutlined } from '@ant-design/icons'
import { getAuth, signInWithEmailAndPassword, type User } from 'firebase/auth'
import toast from 'react-hot-toast'
import { useTypedDispatch } from 'app/store'
import { setUser } from 'app/store/slices/userSlice'

interface IExpandedUser extends User {
  accessToken: string
}

interface Inputs {
  email: string
  password: string
}

interface LoginFormProps {
  hideModal: () => void
  setRegisterForm: Dispatch<SetStateAction<boolean>>
}

export const LoginForm: FC<LoginFormProps> = ({ hideModal, setRegisterForm }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<Inputs>()
  const [isLoading, setLoading] = useState(false)
  const dispatch = useTypedDispatch()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setLoading(true)
    const auth = getAuth()
    const { email, password } = data
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        const expendedUser = user as IExpandedUser
        console.log(expendedUser)
        toast.success('successuffy logged in')

        dispatch(setUser({
          email: expendedUser.email,
          uid: expendedUser.uid,
          token: expendedUser.accessToken
        }))
        reset()
        hideModal()
      })
      .catch(error => {
        const messageError = error.message as string
        toast.error(messageError)
      })
      .finally(() => {
        setLoading(false)
      })
  }
  const { t } = useTranslation()

  const isError = errors.email || errors.password

  return (
    <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
      <label className={cls.label}>
        <span className={cls.labelTitle}>{t('email')}</span>
        <input
          className={cls.input}
          defaultValue=""
          {...register('email', {
            required: { value: true, message: t('requiredField') },
            minLength: { value: 6, message: t('minLength') },
            pattern: { value: /^\S+@\S+$/i, message: t('emailValidErrorMessage') }
          })}
        />
        {errors.email && <span className={cls.error}>{errors.email.message}</span>}
      </label>

      <label className={cls.label}>
        <span className={cls.labelTitle}>{t('password')}</span>
        <input className={cls.input} {...register('password', {
          required: { value: true, message: t('requiredField') },
          minLength: { value: 6, message: t('minLength') },
          maxLength: { value: 45, message: t('maxLength') }
        })} />
        {errors.password && <span className={cls.error}>{errors.password.message}</span>}
      </label>

      <Button
        disabled={Boolean(isError) || isLoading}
        loading={isLoading}
        htmlType="submit"
        size='large'
        icon={<LoginOutlined />}>
        {t('login')}
      </Button>
      <p className={cls.registrationMessage}>
        {t('dontHaveAccMessage')}&nbsp;
        <Button
          className={cls.buttonLink}
          onClick={() => { setRegisterForm(true) } }
          type="link"
        >
          {t('register')}
        </Button>
      </p>
    </form>
  )
}
