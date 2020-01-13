import React, { FunctionComponent } from 'react';
import Spells from './components/Spells/Spells';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header/Header';
import { GlobalStyles } from './components/GlobalStyles';
import BottomBar from './components/BottomBar/BottomBar';
import { useQuery } from '@apollo/react-hooks';
import { GET_THEME } from './components/queries';

const App: FunctionComponent = () => {
  const { data } = useQuery(GET_THEME);
  return (
    <ThemeProvider theme={{ mode: data.theme.mode }}>
      <>
        <GlobalStyles />
        <Header />
        <Spells />
        <BottomBar />
      </>
    </ThemeProvider>
  );
};

export default App;
