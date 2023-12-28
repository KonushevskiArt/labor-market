import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Vacancy.module.scss'
import { type FC } from 'react'

interface VacancyProps {
  className?: string
}

export const Vacancy: FC = ({ className }: VacancyProps) => {
  return (
    <div className={classNames(cls.Vacancy, {}, [className])}>

    </div>
  )
}
