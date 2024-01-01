import cls from './RegisterForm.module.scss'
import { type SetStateAction, type FC, type Dispatch, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { Button } from 'antd'
import { UsergroupAddOutlined } from '@ant-design/icons'
import { getAuth, createUserWithEmailAndPassword, type User } from 'firebase/auth'
import toast from 'react-hot-toast'
import { useTypedDispatch } from 'app/store'
import { setUser } from 'app/store/slices/userSlice'

interface Inputs {
  email: string
  password: string
}

interface IExpandedUser extends User {
  accessToken: string
}

interface RegisterFormProps {
  hideModal: () => void
  setRegisterForm: Dispatch<SetStateAction<boolean>>
}

export const RegisterForm: FC<RegisterFormProps> = ({ hideModal, setRegisterForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>()
  const [isLoading, setLoading] = useState(false)
  const dispatch = useTypedDispatch()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true)
    try {
      const { email, password } = data
      const auth = getAuth()
      const { user } = await createUserWithEmailAndPassword(auth, email, password)
      const expendedUser = user as IExpandedUser
      toast.success('successfully registered')

      dispatch(setUser({
        email: expendedUser.email,
        uid: expendedUser.uid,
        token: expendedUser.accessToken
      }))

      hideModal()
    } catch (error) {
      const messageError = error.message as string
      toast.error(messageError)
    } finally {
      setLoading(false)
    }
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
        icon={<UsergroupAddOutlined />}
      >
        {t('register')}
      </Button>
      <p className={cls.registrationMessage}>
        {t('haveAccMessage')}&nbsp;
        <Button
          className={cls.buttonLink}
          type="link"
          onClick={() => { setRegisterForm(false) }}
        >
           {t('login')}
        </Button>
      </p>
    </form>
  )
}
