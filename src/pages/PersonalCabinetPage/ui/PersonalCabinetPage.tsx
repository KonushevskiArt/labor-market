import cls from './PersonalCabinetPage.module.scss'
import { type FC } from 'react'
import { Container } from 'shared/ui/Container'
import { userData } from './mock'
import { useTranslation } from 'react-i18next'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { useRemoveVacancyMutation } from 'entities/Vacancy/api'

interface PersonalCabinetPageProps {
  className?: string
}

export const PersonalCabinetPage: FC = ({ className }: PersonalCabinetPageProps) => {
  const { t } = useTranslation()
  const [removeVacancy] = useRemoveVacancyMutation()

  const handleDeleteVacancy = (id: string): void => {
    if (window.confirm('Are you sure to delete ?')) {
      removeVacancy(id)
        .then((data) => { console.log(data) })
        .catch((err) => { console.log(err) })
    }
  }

  return (
    <Container>
      <div className={cls.page}>
        <h2 className={cls.title}>{t('personalCabinet')}</h2>
        <ol className={cls.vacanciesList}>
          {userData.vacancies.map(vacancy => (
            <li className={cls.vacancy} key={vacancy.id}>
              <div className={cls.vacancyInfo}>
                <span>{t('title')}: <b>{vacancy.title}</b></span>
                <span>{t('posted')}: <b>{vacancy.date}</b></span>
              </div>
              <div className={cls.vacancyEditor}>
                <Link to={`/edit-vacancy/${vacancy.id}`} state={{ vacancy }}>
                  <Button>{t('edit')}</Button>
                </Link>
                <Button onClick={() => { handleDeleteVacancy(vacancy.id) }} danger>{t('remove')}</Button>
              </div>
            </li>
          ))}
        </ol>
        <Link to='/create-vacancy'>
          <Button type='primary'>{t('createNewVacancy')}</Button>
        </Link>
      </div>
    </Container>
  )
}
