export interface ILocation {
  city: string
  street: string
  house: string
}

export interface ISalary {
  value: number
  currency: string
}

export interface IVacancy {
  title: string
  date: string
  employment: string
  description: string[]
  workExperience: number
  requirements: string[]
  contactNumber: string
  location: ILocation
  salary: ISalary
  createdBy: string
  id: string
}
