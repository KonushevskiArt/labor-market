import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Register.module.scss'
import { type FC } from 'react'

interface RegisterProps {
  className?: string
}

export const Register: FC = ({ className }: RegisterProps) => {
  return (
    <div className={classNames(cls.Register, {}, [className])}>

    </div>
  )
}
