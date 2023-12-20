import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import cls from './Layoyt.module.scss';
import ThemeSwitcher from 'widgets/ThemeSwitcher';
import { Suspense } from 'react';
import { LanguageSwitcher } from './../../widgets/LanguageSwitcher/ui/LanguageSwitcher';

const AppLayout: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback=''>
        <header className={cls.Header}>
          <Navbar />
          <ThemeSwitcher />
          <LanguageSwitcher />
        </header>

        <main className={cls.Main}>
          <AppRouter /> 

          
        </main>
        
        <footer className={cls.Footer}>©2023 Created by Artem K.</footer>
      </Suspense>
      
    </div>
  );
};

export default AppLayout;