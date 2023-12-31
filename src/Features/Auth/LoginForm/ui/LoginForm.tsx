import cls from './LoginForm.module.scss'
import { type Dispatch, type SetStateAction, type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { Button } from 'antd'
import { LoginOutlined } from '@ant-design/icons'

interface Inputs {
  email: string
  password: string
}

interface LoginFormProps {
  className?: string
  handleLogin: () => void
  onCancel: () => void
  setRegisterForm: Dispatch<SetStateAction<boolean>>
}

export const LoginForm: FC<LoginFormProps> = ({ className, onCancel, handleLogin, setRegisterForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log('isError', isError)
    console.log(data)
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
            minLength: { value: 5, message: t('minLength') },
            pattern: { value: /^\S+@\S+$/i, message: t('emailValidErrorMessage') }
          })}
        />
        {errors.email && <span className={cls.error}>{errors.email.message}</span>}
      </label>

      <label className={cls.label}>
        <span className={cls.labelTitle}>{t('password')}</span>
        <input className={cls.input} {...register('password', {
          required: { value: true, message: t('requiredField') },
          minLength: { value: 5, message: t('minLength') },
          maxLength: { value: 45, message: t('maxLength') }
        })} />
        {errors.password && <span className={cls.error}>{errors.password.message}</span>}
      </label>

      <Button disabled={Boolean(isError)} htmlType="submit" size='large' icon={<LoginOutlined />}>{t('login')}</Button>
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
