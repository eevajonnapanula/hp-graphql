import { Spell } from '../components/interfaces';
import { Context } from '@apollo/react-common';
import gql from 'graphql-tag';

const SpellResolver = {
  isSelected: (spell: Spell) =>
    spell.isSelected === undefined ? false : spell.isSelected,
};

const Mutation = {
  setSpellSelect: (_: any, args: any, { cache, getCacheKey }: Context) => {
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
};

const resolvers = {
  Spell: SpellResolver,
  Mutation,
};

export default resolvers;
