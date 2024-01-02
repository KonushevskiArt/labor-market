import { type FC } from 'react'
import cls from './CreateVacancyPage.module.scss'
import { Container } from 'shared/ui/Container'
import {
  Form,
  Input,
  InputNumber,
  Select
} from 'antd'
import { useForm, Controller, type SubmitHandler } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

interface IFormInput {
  title: string
  employment: string
  workExperience: number
  contactNumber: string
  city: string
  street: string
  house: string
  currencyValue: number
  currency: string
  description: string
  requirements: string
}

const employmentMap = {
  fourHoursPerDay: 'От 4 часов в день',
  notFullDay: 'Неполный день',
  inTheEvenings: 'По вечерам',
  onWeekends: 'По выходным',
  oneTimeTask: 'Разовое задание'
}

type TypeEmploymentMap = typeof employmentMap

const { TextArea } = Input

const CreateVacancyPage: FC = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      title: '',
      employment: '',
      workExperience: 0,
      contactNumber: '',
      city: '',
      street: '',
      house: '',
      currency: '',
      currencyValue: 0,
      description: '',
      requirements: ''
    }
  })

  const { t } = useTranslation()

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data)
  }

  return (
    <div className={cls.wrapper}>
      <Container>
        <h2>Create new Vacancy</h2>
      <form
        className={cls.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Form.Item label="title" >
          <Controller
            name="title"
            control={control}
            rules={{
              required: { value: true, message: t('requiredField') },
              maxLength: { value: 140, message: t('maxLength140') }
            }}
            render={({ field }) => <Input className='fs-md' {...field} />}
          />
          {errors.title && <span className={cls.error}>{errors.title.message}</span>}
        </Form.Item>
        <Form.Item label="employment">
          <Controller
            name="employment"
            control={control}
            rules={{
              required: { value: true, message: t('requiredField') }
            }}
            render={({ field }) => (
              <Select className='fs-md' {...field}>
                {Object.keys(employmentMap).map((key: keyof TypeEmploymentMap, i) => (
                  <Select.Option key={i} value={key}>{employmentMap[key]}</Select.Option>
                ))}
              </Select>
            )}
          />
          {errors.employment && <span className={cls.error}>{errors.employment.message}</span>}
        </Form.Item>

        <Form.Item label="work experience ">
          <Controller
              name="workExperience"
              control={control}
              rules={{
                required: { value: true, message: t('requiredField') }
              }}
              render={({ field }) => <InputNumber addonAfter="years" min={0} max={80} className='fs-md' {...field} />}
            />
            {errors.workExperience && <span className={cls.error}>{errors.workExperience.message}</span>}
        </Form.Item>

        <Form.Item label="contactNumber" >
          <Controller
            name="contactNumber"
            control={control}
            rules={{
              required: { value: true, message: t('requiredField') },
              maxLength: { value: 140, message: t('maxLength140') },
              pattern: { value: /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/gm, message: t('mobileNumberValidErrorMessage') }
            }}
            render={({ field }) => <Input type='tel' className='fs-md' {...field} />}
          />
          {errors.contactNumber && <span className={cls.error}>{errors.contactNumber.message}</span>}
        </Form.Item>

        <div>
          <Form.Item label="city" >
            <Controller
              name="city"
              control={control}
              rules={{
                maxLength: { value: 45, message: t('maxLength') }
              }}
              render={({ field }) => <Input className='fs-md' {...field} />}
            />
            {errors.city && <span className={cls.error}>{errors.city.message}</span>}
          </Form.Item>
          <Form.Item label="street" >
            <Controller
              name="street"
              control={control}
              rules={{
                maxLength: { value: 45, message: t('maxLength') }
              }}
              render={({ field }) => <Input className='fs-md' {...field} />}
            />
            {errors.street && <span className={cls.error}>{errors.street.message}</span>}
          </Form.Item>

          <Form.Item label="house" >
            <Controller
              name="house"
              control={control}
              rules={{
                maxLength: { value: 45, message: t('maxLength') }
              }}
              render={({ field }) => <Input className='fs-md' {...field} />}
            />
            {errors.house && <span className={cls.error}>{errors.house.message}</span>}
          </Form.Item>

        </div>

        <div>
          <Form.Item label="currency" >
            <Controller
              name="currency"
              control={control}
              rules={{
                maxLength: { value: 45, message: t('maxLength') }
              }}
              render={({ field }) => <Input className='fs-md' {...field} />}
            />
            {errors.currency && <span className={cls.error}>{errors.currency.message}</span>}
          </Form.Item>
          <Form.Item label="currencyValue" >
            <Controller
              name="currencyValue"
              control={control}
              rules={{
                maxLength: { value: 45, message: t('maxLength') }
              }}
              render={({ field }) => <Input className='fs-md' {...field} />}
            />
            {errors.currencyValue && <span className={cls.error}>{errors.currencyValue.message}</span>}
          </Form.Item>

        </div>

        <div>
          <Form.Item label="description" >
            <p>Если вы хотите сделать перевод строки то используйте /n</p>
            <Controller
              name="description"
              control={control}
              rules={{
                maxLength: { value: 1000, message: t('maxLength1000') }
              }}
              render={({ field }) => <TextArea rows={8} className='fs-md' {...field} />}
            />
            {errors.description && <span className={cls.error}>{errors.description.message}</span>}
          </Form.Item>

          <Form.Item label="requirements" >
            <p>Если вы хотите сделать перевод строки то используйте /n</p>
            <Controller
              name="requirements"
              control={control}
              rules={{
                maxLength: { value: 1000, message: t('maxLength1000') }
              }}
              render={({ field }) => <TextArea rows={8} className='fs-md' {...field} />}
            />
            {errors.requirements && <span className={cls.error}>{errors.requirements.message}</span>}
          </Form.Item>
        </div>

        <button type='submit'>submit</button>
      </form>

      </Container>
    </div>
  )
}

export default CreateVacancyPage

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
  employment: string
  workExperience: number
  contactNumber: string
  location: ILocation
  salary: ISalary
  description: string[]
  requirements: string[]
  createdBy: string
  date: string
  id: string
}
