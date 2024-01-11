export const RouterPaths = {
  homePage: '/',
  vacancyPage: (id: string = null) => id ? `/vacancy/${id}` : '/vacancy/:id',
  aboutPage: '/about',
  createVacancyPage: '/create-vacancy',
  editVacancyPage: (id: string = null) => id ? `/edit-vacancy/${id}` : '/edit-vacancy/:id',
  personalCabinetPage: '/personal-cabinet',
  notFoundPage: '*'
}
