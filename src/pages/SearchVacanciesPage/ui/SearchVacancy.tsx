import cls from './SearchVacancy.module.scss'
import { type FC } from 'react'
import { Container } from 'shared/ui/Container'
import { vacanciesList } from './mock'
import { Vacancy } from 'entities/Vacancy/ui/Vacancy'
import { SearchBar } from 'widgets/SearchBar'

interface SearchVacancyProps {
  className?: string
}

export const SearchVacancy: FC = ({ className }: SearchVacancyProps) => {
  return (
    <Container>
      <SearchBar />
      <ul className={cls.SearchVacancy}>
        {vacanciesList.map(vacancy => (
          <li key={vacancy.id}>
            <Vacancy data={vacancy} />
          </li>
        ))}
      </ul>
    </Container>
  )
}
