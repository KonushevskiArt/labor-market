import { AboutPage } from 'pages/AboutPage'
import { CreateVacancyPage } from 'pages/CreateVacancyPage'
import { EditVacancyPage } from 'pages/EditVacancyPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { PersonalCabinetPage } from 'pages/PersonalCabinetPage'
import { SearchVacancy } from 'pages/SearchVacanciesPage'
import { VacancyPage } from 'pages/VacancyPage'
import { type FC, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { RouterPaths } from 'shared/RouterPaths'
import PageSkeleton from 'widgets/PageSkeleton'

const AppRouter: FC = () => {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <Routes>
        <Route path={RouterPaths.homePage} element={<SearchVacancy />} />
        <Route path={RouterPaths.vacancyPage()} element={<VacancyPage />} />
        <Route path={RouterPaths.aboutPage} element={<AboutPage />} />
        <Route path={RouterPaths.createVacancyPage} element={<CreateVacancyPage />} />
        <Route path={RouterPaths.editVacancyPage()} element={<EditVacancyPage />} />
        <Route path={RouterPaths.personalCabinetPage} element={<PersonalCabinetPage />} />
        <Route path={RouterPaths.notFoundPage} element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  )
}

export default AppRouter
