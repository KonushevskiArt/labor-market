import { classNames } from 'shared/lib/classNames/classNames'
import cls from './VacancyPage.module.scss'
import { type FC } from 'react'
import { Container } from 'shared/ui/Container'
import { useLocation } from 'react-router-dom'
import { type IVacancy } from 'entities/Vacancy/types'
import { t } from 'i18next'
import { Divider } from 'antd'

interface VacancyPageProps {
  className?: string
}

const VacancyPage: FC = ({ className }: VacancyPageProps) => {
  const { data } = useLocation().state as { data: IVacancy }
  const {
    title,
    date,
    employment,
    description,
    workExperience,
    requirements,
    contactNumber,
    location,
    salary,
    createdBy
  } = data

  const convertStringToArrayBySlashN = (str: string): string[] => {
    const res = str.split('/n')
    return res
  }

  return (
    <Container>
      <div className={classNames(cls.VacancyPage, {}, [className])}>
        <h3 className={cls.title}>{title}</h3>
        <Divider plain></Divider>
        <p><i>{t('createdBy')}</i>: <b>{createdBy}</b></p>
        <p><i>{t('busyness')}</i>: <b>{employment}</b> </p>
        <p><i>{t('city')}</i>: <b>{location.city}</b></p>
        <p><i>{t('salary')}</i>: <b>{salary.value}{salary.currency}</b></p>
        <p><i>{t('workExperience')}</i>: <b>{workExperience} {t('years')}</b></p>
        <p><i>{t('contactNumber')}</i>: <b>{contactNumber}</b></p>
        <Divider plain></Divider>
        <ol className={cls.description}>
          <span className={cls.descriptionTitle}><b className='fs-lg'>{t('description')}</b></span>
          {convertStringToArrayBySlashN(description).map((dscr, i) => (
            <li key={i}>{dscr}</li>
          ))}
        </ol>
        <ol className={cls.requirements}>
          <span className={cls.requirementsTitle}><b className='fs-lg'>{t('requirements')}</b></span>
          {convertStringToArrayBySlashN(requirements).map((requ, i) => (
            <li key={i}>{requ}</li>
          ))}
        </ol>
        <p>
          <i>{t('posted')}</i>: <b>{date}</b>
        </p>
      </div>
    </Container>
  )
}

export default VacancyPage
