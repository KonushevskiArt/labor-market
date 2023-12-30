import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Login.module.scss'
import { useState, type FC } from 'react'
import { Modal } from 'antd'
import { LoginOutlined } from '@ant-design/icons'
import { LoginForm } from 'Features/Auth/LoginForm'
import { useTranslation } from 'react-i18next'

interface LoginProps {
  className?: string
}

export const Login: FC = ({ className }: LoginProps) => {
  const { t } = useTranslation()
  const [open, setOpen] = useState(true)

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
        <LoginForm handleLogin={handleSubmit} onCancel={handleCancel} />
      </Modal>
    </>
  )
}
