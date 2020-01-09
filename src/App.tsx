import React, { FunctionComponent, useState } from 'react';
import Spells from './components/Spells';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import { ThemeType } from './components/interfaces';
import { GlobalStyles } from './components/GlobalStyles';
import BottomBar from './components/BottomBar';

const App: FunctionComponent = () => {
  const [theme, setTheme] = useState<ThemeType>('light');
  const handleThemeChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <ThemeProvider theme={{ mode: theme }}>
      <>
        <GlobalStyles />
        <Header toggleTheme={handleThemeChange} theme={theme} />
        <Spells />
        <BottomBar />
      </>
    </ThemeProvider>
  );
};

export default App;
