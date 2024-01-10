import cls from './SearchVacancy.module.scss'
import { type FC } from 'react'
import { Container } from 'shared/ui/Container'
import { Vacancy } from 'pages/SearchVacanciesPage/ui/Vacancy/Vacancy'
import { SearchBar } from 'widgets/SearchBar'
import { useFetchVacanciesQuery } from 'entities/Vacancy/api'
import PageSkeleton from 'widgets/PageSkeleton'
import toast from 'react-hot-toast'

interface SearchVacancyProps {
  className?: string
}

export const SearchVacancy: FC = ({ className }: SearchVacancyProps) => {
  const { data, isLoading, isError, error } = useFetchVacanciesQuery(null)

  if (isError) {
    const messageError = error as string
    toast.error(messageError)
    console.log(error)
  }

  return (
    <Container>
      <SearchBar />
      {isLoading
        ? <PageSkeleton />
        : <ul className={cls.SearchVacancy}>
        {data?.map((vacancy) => (
          <li key={vacancy.id}>
            <Vacancy data={vacancy} />
          </li>
        ))}
      </ul>
      }
    </Container>
  )
}
