import { classNames } from 'shared/lib/classNames/classNames'
import cls from './SearchBar.module.scss'
import { type FC } from 'react'
import { Input } from 'antd'
import { useTranslation } from 'react-i18next'
import { useTypedDispatch } from 'app/store'
import { fetchVacancies } from 'entities/Vacancy/model/vacancySlice'

const { Search } = Input

interface SearchBarProps {
  className?: string
}

export const SearchBar: FC = ({ className }: SearchBarProps) => {
  const { t } = useTranslation()
  const dispatch = useTypedDispatch()
  const onSearch = (value: string): void => {
    dispatch(fetchVacancies())
      .then(() => {
        console.log()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className={classNames(cls.SearchBar, {}, [className])}>
      <div className={cls.wrapper}>
        <Search placeholder={t('searchText')} onSearch={onSearch} enterButton />
      </div>
    </div>
  )
}
