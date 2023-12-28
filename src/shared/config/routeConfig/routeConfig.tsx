import { type RouteProps } from 'react-router-dom'
import { AboutPage } from 'pages/AboutPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { SearchVacancy } from 'pages/SearchVacancies'

export enum AppRoutes {
  SEARCH_VACANCY = 'searchVacancy',
  ABOUT = 'about',
  NOT_FOUND = 'notFound'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.SEARCH_VACANCY]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.SEARCH_VACANCY]: {
    path: RoutePath.searchVacancy,
    element: <SearchVacancy />
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.notFound,
    element: <NotFoundPage />
  }
}
