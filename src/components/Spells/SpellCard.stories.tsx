import React from 'react';

import SpellCard from './SpellCard'
import { Spell } from '../interfaces';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from '../../apolloSetup';

export default {
  component: SpellCard,
  title: 'SpellCard',
  excludeStories: /.*Data$/,
}

const spellData: Spell = {
  id: '1',
  spell: 'Accio',
  type: 'Charm',
  effect: 'Summons an object',
  isSelected: true
}

export const Default = () => {

  return <ApolloProvider client={client}><SpellCard spell={spellData} /></ApolloProvider>
}