import cls from './Logout.module.scss'
import { type FC } from 'react'
import { useAuth } from 'shared/hooks/useAuth'
import { LogoutOutlined } from '@ant-design/icons'
import { useTypedDispatch } from 'app/store'
import { removeUser } from 'entities/User/model/userSlice'

export const Logout: FC = () => {
  const { email } = useAuth()
  const dispatch = useTypedDispatch()

  const handleLogout = (): void => {
    dispatch(removeUser())
  }

  return (
    <div className={cls.logout}>
      <span className={cls.email}>{email}</span>
      <button
        onClick={handleLogout}
        className={cls.logoutButton}
        title="logout"
      >
        <LogoutOutlined className={cls.logoutIcon} />
      </button>
    </div>
  )
}
