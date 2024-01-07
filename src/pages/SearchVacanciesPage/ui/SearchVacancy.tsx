import cls from './SearchVacancy.module.scss'
import { type FC } from 'react'
import { Container } from 'shared/ui/Container'
import { Vacancy } from 'entities/Vacancy/ui/Vacancy'
import { SearchBar } from 'widgets/SearchBar'
import { useFetchVacanciesQuery } from 'entities/Vacancy/api'
import PageSkeleton from 'widgets/PageSkeleton'

interface SearchVacancyProps {
  className?: string
}

export const SearchVacancy: FC = ({ className }: SearchVacancyProps) => {
  const { data, isLoading, isError, error } = useFetchVacanciesQuery(null)
  console.log(isLoading, isError, error)

  return (
    <Container>
      <SearchBar />
      {isLoading
        ? <PageSkeleton />
        : <ul className={cls.SearchVacancy}>
        {data.map((vacancy, i) => (
          <li key={i}>
            <Vacancy data={vacancy} />
          </li>
        ))}
      </ul>
      }
    </Container>
  )
}
