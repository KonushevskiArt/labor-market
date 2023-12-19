import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import cls from './Layoyt.module.scss';
import ThemeSwitcher from 'widgets/ThemeSwitcher';

const AppLayout: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      
      <header className={cls.Header}>
        <Navbar />
        <ThemeSwitcher />
        
      </header>

      <main className={cls.Main}>
        <AppRouter /> 

        
      </main>
      
      <footer className={cls.Footer}>©2023 Created by Artem K.</footer>
    </div>
  );
};

export default AppLayout;