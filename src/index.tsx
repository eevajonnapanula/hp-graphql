import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloProvider } from '@apollo/react-hooks';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';
import resolvers from './resolvers';
import typeDefs from './typeDefs';

const normalizeId = (key: string) => {
  if (key[0] === '_') {
    return key.substring(1);
  }
  return key;
};

const restLink = new RestLink({
  uri: 'https://www.potterapi.com/v1/',
  fieldNameNormalizer: (key: string) => normalizeId(key),
});

const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
  resolvers,
  typeDefs,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
