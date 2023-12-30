import cls from './LoginForm.module.scss'
import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { Button } from 'antd'
import { LoginOutlined } from '@ant-design/icons'

interface Inputs {
  name: string
  password: string
}

interface LoginFormProps {
  className?: string
  handleLogin: () => void
  onCancel: () => void
}

export const LoginForm: FC<LoginFormProps> = ({ className, onCancel, handleLogin }) => {
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

  const isError = errors.name || errors.password

  return (
    <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
      <label className={cls.label}>
        <span className={cls.labelTitle}>{t('email')}</span>
        <input className={cls.input} defaultValue="test" {...register('name', { required: true })} />
        {errors.name && <span className={cls.error}>{t('requiredField')}</span>}
      </label>

      <label className={cls.label}>
        <span className={cls.labelTitle}>{t('password')}</span>
        <input className={cls.input} {...register('password', { required: true })} />
        {errors.password && <span className={cls.error}>{t('requiredField')}</span>}
      </label>

      <Button disabled={Boolean(isError)} htmlType="submit" size='large' icon={<LoginOutlined />}>{t('login')}</Button>
      <p className={cls.registrationMessage}>{t('dontHaveAccMessage')} <Button className={cls.buttonLink} type="link">{t('register')}</Button></p>
    </form>
  )
}
