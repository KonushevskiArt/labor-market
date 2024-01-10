export const RouterPaths = {
  homePage: '/',
  vacancyPage: (id: string = null) => id ? `/${id}` : '/:id',
  aboutPage: '/about',
  createVacancyPage: '/create-vacancy',
  editVacancyPage: (id: string = null) => id ? `/edit-vacancy/${id}` : '/edit-vacancy/:id',
  personalCabinetPage: '/personal-cabinet',
  notFoundPage: '*'
}
