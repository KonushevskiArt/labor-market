import cls from './PersonalCabinetPage.module.scss'
import { type FC } from 'react'
import { Container } from 'shared/ui/Container'
import { userData } from './mock'
import { useTranslation } from 'react-i18next'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

interface PersonalCabinetPageProps {
  className?: string
}

export const PersonalCabinetPage: FC = ({ className }: PersonalCabinetPageProps) => {
  const { t } = useTranslation()

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
                <Button danger>{t('remove')}</Button>
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
