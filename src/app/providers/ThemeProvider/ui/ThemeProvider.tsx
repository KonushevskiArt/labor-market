import React, { FC, useMemo, useState } from "react";
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from "../lib/ThemeContext";
import { Button, Card, ConfigProvider, theme as antdTheme} from 'antd';

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const { defaultAlgorithm, darkAlgorithm } = antdTheme;
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    setIsDarkMode((previousValue) => !previousValue);
  }

  const defaultProps = useMemo(
    () => ({
      theme: theme,
      setTheme: toggleTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      <ConfigProvider
        theme={{
          algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
        }}>
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
