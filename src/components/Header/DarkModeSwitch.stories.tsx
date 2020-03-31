import React from 'react';

import DarkModeSwitch from './DarkModeSwitch'
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from '../../apolloSetup';

export default {
  component: DarkModeSwitch,
  title: 'DarkModeSwitch',
  excludeStories: /.*Data$/,
}

export const Default = () => {

  return <ApolloProvider client={client}><DarkModeSwitch /></ApolloProvider>
}