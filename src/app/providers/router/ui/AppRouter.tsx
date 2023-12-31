import { AboutPage } from 'pages/AboutPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { PersonalCabinetPage } from 'pages/PersonalCabinetPage'
import { SearchVacancy } from 'pages/SearchVacanciesPage'
import { VacancyPage } from 'pages/VacancyPage'
import { type FC, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import PageSkeleton from 'widgets/PageSkeleton'

const AppRouter: FC = () => {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <Routes>
        <Route path={'/'} element={<SearchVacancy />} />
        <Route path={':id'} element={<VacancyPage />} />
        <Route path={'/about'} element={<AboutPage />} />
        <Route path={'/personal-cabinet'} element={<PersonalCabinetPage />} />
        <Route path={'*'} element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  )
}

export default AppRouter
