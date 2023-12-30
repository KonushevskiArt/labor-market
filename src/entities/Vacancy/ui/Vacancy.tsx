import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Vacancy.module.scss'
import { useState, type FC } from 'react'
import { type IVacancy } from '../types'
import { Divider, Button } from 'antd'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

interface VacancyProps {
  data: IVacancy
}

export const Vacancy: FC<VacancyProps> = ({ data }) => {
  const { t } = useTranslation()

  const [isShowContact, setShowContact] = useState<boolean>(false)

  const handleShowContact = (): void => {
    setShowContact(true)
  }

  const {
    title,
    employment,
    date,
    location,
    salary,
    createdBy,
    contactNumber,
    id
  } = data

  return (
    <div className={classNames(cls.Vacancy, {}, [])}>
      <h3 className={cls.title}>
        <Link className='link' to={`/${id}`} state={{ data }}>{title}</Link>
      </h3>
      <Divider plain></Divider>
      <p><i>{t('createdBy')}</i>: <b>{createdBy}</b></p>
      <p><i>{t('busyness')}</i>: <b>{employment}</b> </p>
      <p><i>{t('city')}</i>: <b>{location.city}</b></p>
      <p><i>{t('salary')}</i>: <b>{salary.value}{salary.currency}</b></p>
      <Divider plain></Divider>
      <p>
        <i>{t('posted')}</i>: <b>{date}</b>
        {isShowContact
          ? <span className={cls.contact}>{contactNumber}</span>
          : <Button onClick={handleShowContact} type='primary' ghost className={cls.contactButton}>
            {t('showContacts')}
          </Button>
        }
      </p>
    </div>
  )
}
