import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Vacancy.module.scss'
import { type FC } from 'react'
import { type IVacancy } from '../types'
import { Divider } from 'antd'
import { useTranslation } from 'react-i18next'

interface VacancyProps {
  data: IVacancy
}

export const Vacancy: FC<VacancyProps> = ({ data }) => {
  const { t } = useTranslation()

  const {
    title,
    employment,
    date,
    location,
    salary,
    createdBy
  } = data

  return (
    <div className={classNames(cls.Vacancy, {}, [])}>
      <h3 className={cls.title}>{title}</h3>
      <Divider plain></Divider>
      <p><i>{t('createdBy')}</i>: <b>{createdBy}</b></p>
      <p><i>{t('busyness')}</i>: <b>{employment}</b> </p>
      <p><i>{t('city')}</i>: <b>{location.city}</b></p>
      <p><i>{t('salary')}</i>: <b>{salary.value}{salary.currency}</b></p>
      <Divider plain></Divider>
      <p><i>{t('posted')}</i>: <b>{date}</b></p>
    </div>
  )
}
