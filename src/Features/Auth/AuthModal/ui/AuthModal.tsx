import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AuthModal.module.scss'
import { useState, type FC } from 'react'
import { Modal } from 'antd'
import { LoginOutlined } from '@ant-design/icons'
import { LoginForm } from 'Features/Auth/LoginForm'
import { useTranslation } from 'react-i18next'
import { RegisterForm } from 'Features/Auth/RegisterForm'

interface AuthModalProps {
  className?: string
}

export const AuthModal: FC = ({ className }: AuthModalProps) => {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [isRegisterForm, setRegisterForm] = useState(true)

  const showModal = (): void => {
    setOpen(true)
  }

  const handleSubmit = (): void => {
    setTimeout(() => {
      setOpen(false)
    }, 3000)
  }

  const handleCancel = (): void => {
    setOpen(false)
  }
  return (
    <>
      <button
        onClick={showModal}
        className={classNames(cls.LoginButton, {}, [className])}
        title="login"
      >
        <LoginOutlined className={cls.LoginIcon} />
      </button>
      <Modal
        open={open}
        className={cls.modal}
        title={t('loginTitle')}
        onOk={handleSubmit}
        onCancel={handleCancel}
        footer={[]}
      >
        {isRegisterForm
          ? <RegisterForm setRegisterForm={setRegisterForm} handleRegister={handleSubmit} onCancel={handleCancel} />
          : <LoginForm setRegisterForm={setRegisterForm} handleLogin={handleSubmit} onCancel={handleCancel} />
      }
      </Modal>
    </>
  )
}
