import { Spell, SetSpellSelectArgs } from '../components/interfaces';
import { Context } from '@apollo/react-common';
import gql from 'graphql-tag';
import { GET_THEME } from '../components/queries';

const SpellResolver = {
  isSelected: (spell: Spell) =>
    spell.isSelected === undefined ? false : spell.isSelected,
};

const Mutation = {
  setSpellSelect: (_: [], args: SetSpellSelectArgs, { cache, getCacheKey }: Context) => {
    const id = getCacheKey({ __typename: 'Spell', id: args.id });

    const fragment = gql`
      fragment SpellSelected on Spell {
        isSelected @client
      }
    `;

    const spell = cache.readFragment({ fragment, id });

    const data = { ...spell, isSelected: !spell.isSelected };

    cache.writeData({ id, data });
  },
  setTheme: (_: [], __: [], { cache }: Context) => {
    const query = GET_THEME;
    const prev = cache.readQuery({ query });

    const data = {
      ...prev,
      theme: {
        ...prev.theme,
        mode: prev.theme.mode === 'light' ? 'dark' : 'light',
      },
    };

    cache.writeData({ query, data });
  },
};

const resolvers = {
  Spell: SpellResolver,
  Mutation,
};

export default resolvers;
