import { useTranslation } from 'react-i18next';
import { Select } from 'antd';

export const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  
  const langToggle = (value: string) => {
    i18n.changeLanguage(value)
  }

  return (
    <Select
      defaultValue="en"
      style={{ width: 70 }}
      onChange={langToggle}
      options={[
        { value: 'ru', label: t('ru') },
        { value: 'en', label: t('en') },
      ]}
    />
  );
};
