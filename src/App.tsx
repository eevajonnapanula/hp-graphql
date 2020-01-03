import React, { FunctionComponent } from 'react';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';
import { ApolloProvider } from '@apollo/react-hooks';
import Spells from './components/Spells';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato|Gourgette&display=swap');
  body {
    font-family: 'Lato', sans-serif;
  }
  h1 {
    font-family: 'Gourgette', cursive;
  }
`;

const restLink = new RestLink({
  uri: 'https://www.potterapi.com/v1/',
});

const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});

const App: FunctionComponent = () => {
  return (
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Header />
      <Spells />
    </ApolloProvider>
  );
};

export default App;
