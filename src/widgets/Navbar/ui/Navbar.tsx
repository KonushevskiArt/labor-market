import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { type FC } from 'react'
import { v4 as uuid } from 'uuid'
import { NavLink } from 'react-router-dom'

interface NavbarProps {
  className?: string
}

export const Navbar: FC = ({ className }: NavbarProps) => {
  const { t } = useTranslation()

  const links = [
    { id: uuid(), path: '/', title: t('navigation_main') },
    { id: uuid(), path: '/about', title: t('navigation_about') }
  ]
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <nav className={cls.links}>
        {links.map(({ id, path, title }) => (
          <NavLink
            to={path}
            key={id}
            className={({ isActive }) => isActive ? classNames(cls.navLink, {}, [cls.active]) : cls.navLink}
          >
            {title}
          </NavLink>
        )
        )}
      </nav>
    </div>
  )
}
