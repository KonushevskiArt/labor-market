import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/router'
import { Suspense } from 'react'
import type React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Navbar } from 'widgets/Navbar'
import cls from './Layoyt.module.scss'
import ThemeSwitcher from 'widgets/ThemeSwitcher'

import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'
import { Logo } from 'widgets/Logo'
import CopyRightIcon from 'shared/assets/icons/copyRights.svg'
import { Login } from 'Features/Auth/Login'

const AppLayout: React.FC = () => {
  const { theme } = useTheme()
  const { t } = useTranslation()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback=''>
        <header className={cls.header}>
          <Logo />
          <Navbar />
          <Login />
          <ThemeSwitcher />
          <LanguageSwitcher />
        </header>

        <main className={cls.main}>
          <AppRouter />
        </main>

        <footer className={cls.footer}>
          {t('created_by')}
          <CopyRightIcon className={cls.copyRightIcon} />
        </footer>
      </Suspense>

    </div>
  )
}

export default AppLayout
