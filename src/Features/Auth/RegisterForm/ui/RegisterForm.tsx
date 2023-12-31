import cls from './RegisterForm.module.scss'
import { type SetStateAction, type FC, type Dispatch } from 'react'
import { useTranslation } from 'react-i18next'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { Button } from 'antd'
import { UsergroupAddOutlined } from '@ant-design/icons'

interface Inputs {
  email: string
  password: string
}

interface RegisterFormProps {
  className?: string
  handleRegister: () => void
  onCancel: () => void
  setRegisterForm: Dispatch<SetStateAction<boolean>>
}

export const RegisterForm: FC<RegisterFormProps> = ({ className, onCancel, handleRegister, setRegisterForm }) => {
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

      <Button disabled={Boolean(isError)} htmlType="submit" size='large' icon={<UsergroupAddOutlined />}>{t('register')}</Button>
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
