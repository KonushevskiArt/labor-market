import React from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
  className?: string;
}

const links = [
  {path: '/', title : 'Главная'},
  {path: '/about', title : 'О сайте'},
]

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <nav className={cls.links}>
        {links.map(( { path, title } ) => (
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
  );
};
