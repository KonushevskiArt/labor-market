import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import { type FC } from 'react'

interface NavbarProps {
  className?: string
}

export const Navbar: FC = ({ className }: NavbarProps) => {
  const { t } = useTranslation()

  const links = [
    { path: '/', title: t('navigation_main') },
    { path: '/about', title: t('navigation_about') }
  ]
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <nav className={cls.links}>
        {links.map(({ path, title }) => (
          <div key={path + title} className={cls.linkWrapper}>
            <AppLink
              theme={AppLinkTheme.PRIMARY}
              to={path}
              className={classNames(cls.mainLink, {}, [cls.navLink])}
            >
              {title}
            </AppLink>
          </div>
        )
        )}
      </nav>
    </div>
  )
}
