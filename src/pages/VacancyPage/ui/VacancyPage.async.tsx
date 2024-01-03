import { lazy } from 'react'

export const VacancyPageAsync = lazy(async () => {
  await new Promise((resolve) => {
    setTimeout(() => { resolve('') }, 500)
  })
  return await import('./VacancyPage')
})
