import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginButton.module.scss'
import { type FC } from 'react'
import { LoginOutlined } from '@ant-design/icons'

interface LoginButtonProps {
  className?: string
}

export const LoginButton: FC = ({ className }: LoginButtonProps) => {
  return (
    <button className={classNames(cls.LoginButton, {}, [className])} title="login">
      <LoginOutlined className={cls.LoginIcon} />
    </button>
  )
}
