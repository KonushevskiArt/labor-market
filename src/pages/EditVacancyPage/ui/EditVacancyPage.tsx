import { type FC } from 'react'
import cls from './EditVacancyPage.module.scss'
import { Container } from 'shared/ui/Container'
import {
  Button,
  Form,
  Input,
  InputNumber,
  Select
} from 'antd'
import { useForm, Controller, type SubmitHandler } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { EditOutlined } from '@ant-design/icons'
import { useLocation } from 'react-router-dom'
import { type IVacancy } from 'entities/Vacancy/types'

export interface IFormInput {
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

const { TextArea } = Input

const EditVacancyPage: FC = () => {
  const { vacancy } = useLocation().state as { vacancy: IVacancy }
  const {
    title,
    // date,
    employment,
    description,
    workExperience,
    requirements,
    contactNumber,
    location,
    salary
    // createdBy
  } = vacancy

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      title,
      employment,
      workExperience,
      contactNumber,
      city: location.city,
      street: location.street,
      house: location.house,
      currency: salary.currency,
      currencyValue: salary.value,
      description,
      requirements
    }
  })

  const { t } = useTranslation()

  const employmentMap = {
    fourHoursPerDay: t('fourHoursPerDay'),
    notFullDay: t('notFullDay'),
    inTheEvenings: t('InTheEvenings'),
    onWeekends: t('onWeekends'),
    oneTimeTask: t('OneTimeTask')
  }
  type TypeEmploymentMap = typeof employmentMap

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data)
  }

  return (
    <div className={cls.wrapper}>
      <Container>
        <h2 className={cls.title}>{t('editingVacancy')}</h2>
        <Form
          className={cls.form}
          onFinish={handleSubmit(onSubmit)}
          layout="horizontal"
        >
          <div className={cls.inputsWrapper}>
            <div className={cls.inputWrapper}>
              <label className={cls.label} htmlFor="title">{t('title')}</label>
              <Form.Item className={cls.formItem}>
                <Controller
                  name="title"
                  control={control}
                  rules={{
                    required: { value: true, message: t('requiredField') },
                    maxLength: { value: 140, message: t('maxLength140') }
                  }}
                  render={({ field }) => <Input id='title' className={cls.input} {...field} />}
                />
                {errors.title && <span className={cls.error}>{errors.title.message}</span>}
              </Form.Item>
            </div>
            <div className={cls.inputWrapper}>
              <label className={cls.label} htmlFor="employment">{t('employment')}</label>
              <Form.Item className={cls.formItem}>
                <Controller
                  name="employment"
                  control={control}
                  rules={{
                    required: { value: true, message: t('requiredField') }
                  }}
                  render={({ field }) => (
                    <Select id='employment' className={cls.input} {...field}>
                      {Object.keys(employmentMap).map((key: keyof TypeEmploymentMap, i) => (
                        <Select.Option key={i} value={key}>{employmentMap[key]}</Select.Option>
                      ))}
                    </Select>
                  )}
                />
                {errors.employment && <span className={cls.error}>{errors.employment.message}</span>}
              </Form.Item>
            </div>

            <div className={cls.inputWrapper}>
              <label className={cls.label} htmlFor="workExperience">{t('workExperience')}</label>
              <Form.Item className={cls.formItem}>
                <Controller
                    name="workExperience"
                    control={control}
                    rules={{
                      required: { value: true, message: t('requiredField') }
                    }}
                    render={({ field }) => (
                      <InputNumber id='workExperience' className={cls.input} addonAfter={t('years')} min={0} max={80} {...field} />
                    )}
                  />
                  {errors.workExperience && <span className={cls.error}>{errors.workExperience.message}</span>}
              </Form.Item>
            </div>

            <div className={cls.inputWrapper}>
              <label className={cls.label} htmlFor="contactNumber">{t('contactNumber')}</label>
              <Form.Item className={cls.formItem}>
                <Controller
                  name="contactNumber"
                  control={control}
                  rules={{
                    required: { value: true, message: t('requiredField') },
                    maxLength: { value: 140, message: t('maxLength140') },
                    pattern: { value: /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/gm, message: t('mobileNumberValidErrorMessage') }
                  }}
                  render={({ field }) => (
                    <Input id='contactNumber' className={cls.input} type='tel' {...field} />
                  )}
                />
                {errors.contactNumber && <span className={cls.error}>{errors.contactNumber.message}</span>}
              </Form.Item>
            </div>

            <div className={cls.locationWrapper}>
              <span className={cls.locationLabel}>{t('location')}</span>
              <div className={cls.inputWrapper}>
                <label className={cls.label} htmlFor="city">{t('city')}</label>
                <Form.Item className={cls.formItem}>
                  <Controller
                    name="city"
                    control={control}
                    rules={{
                      maxLength: { value: 45, message: t('maxLength') }
                    }}
                    render={({ field }) => <Input id='city' className={cls.input} {...field} />}
                  />
                  {errors.city && <span className={cls.error}>{errors.city.message}</span>}
                </Form.Item>
              </div>
              <div className={cls.inputWrapper}>
                <label className={cls.label} htmlFor="street">{t('street')}</label>
                <Form.Item className={cls.formItem}>
                  <Controller
                    name="street"
                    control={control}
                    rules={{
                      maxLength: { value: 45, message: t('maxLength') }
                    }}
                    render={({ field }) => <Input id='street' className={cls.input} {...field} />}
                  />
                  {errors.street && <span className={cls.error}>{errors.street.message}</span>}
                </Form.Item>
              </div>

              <div className={cls.inputWrapper}>
                <label className={cls.label} htmlFor="house">{t('house')}</label>
                <Form.Item className={cls.formItem}>
                  <Controller
                    name="house"
                    control={control}
                    rules={{
                      maxLength: { value: 45, message: t('maxLength') }
                    }}
                    render={({ field }) => <Input id='house' className={cls.input} {...field} />}
                  />
                  {errors.house && <span className={cls.error}>{errors.house.message}</span>}
                </Form.Item>
              </div>

            </div>

            <div className={cls.salaryWrapper}>
              <span className={cls.salaryLabel}>{t('salary')}</span>
              <div className={cls.inputWrapper}>
                <label className={cls.label} htmlFor="currency">{t('currency')}</label>
                <Form.Item className={cls.formItem}>
                  <Controller
                    name="currency"
                    control={control}
                    rules={{
                      maxLength: { value: 45, message: t('maxLength') }
                    }}
                    render={({ field }) => <Input id='currency' className={cls.input} {...field} />}
                  />
                  {errors.currency && <span className={cls.error}>{errors.currency.message}</span>}
                </Form.Item>
              </div>
              <div className={cls.inputWrapper}>
                <label className={cls.label} htmlFor="currencyValue">{t('value')}</label>
                <Form.Item className={cls.formItem}>
                  <Controller
                    name="currencyValue"
                    control={control}
                    rules={{
                      maxLength: { value: 45, message: t('maxLength') }
                    }}
                    render={({ field }) => <Input id='currencyValue' className={cls.input} {...field} />}
                  />
                  {errors.currencyValue && <span className={cls.error}>{errors.currencyValue.message}</span>}
                </Form.Item>
              </div>
            </div>

          </div>

          <div className={cls.textAreaWrapper}>
            <Form.Item >
              <label className={cls.label} htmlFor="description">{t('description')}</label>
              <p>{t('lineFeedInTextArea')}</p>
              <Controller
                name="description"
                control={control}
                rules={{
                  maxLength: { value: 1000, message: t('maxLength1000') }
                }}
                render={({ field }) => <TextArea id='description' rows={14} cols={50} className='fs-md' {...field} />}
              />
              {errors.description && <span className={cls.error}>{errors.description.message}</span>}
            </Form.Item>

            <Form.Item>
              <label className={cls.label} htmlFor="requirements">{t('requirements')}</label>
              <p>{t('lineFeedInTextArea')}</p>
              <Controller
                name="requirements"
                control={control}
                rules={{
                  maxLength: { value: 1000, message: t('maxLength1000') }
                }}
                render={({ field }) => <TextArea id='requirements' rows={14} cols={50} className='fs-md' {...field} />}
              />
              {errors.requirements && <span className={cls.error}>{errors.requirements.message}</span>}
            </Form.Item>
            <Button
              // disabled={Boolean(isError) || isLoading}
              // loading={isLoading}
              htmlType="submit"
              size='large'
              type='primary'
              icon={<EditOutlined />}
            >
              {t('editVacancy')}
            </Button>
          </div>

        </Form>

      </Container>
    </div>
  )
}

export default EditVacancyPage
