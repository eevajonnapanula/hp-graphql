import React, { useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Spell } from './interfaces';
import SpellCard from './SpellCard';
import styled from 'styled-components';

const query = gql`
  query spell($path: String) {
    spells @rest(type: "Spell", path: $path) {
      id
      spell
      type
      effect
      isSelected @client
    }
  }
`;

const SpellsWrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
  justify-content: center;
  align-items: baseline;
  margin: 1em;
  grid-gap: 1em;
`;

const Spells = () => {
  const [spells, setSpells] = useState<Spell[]>([]);
  const { data } = useQuery(query, {
    variables: {
      path: `spells?key=${process.env.REACT_APP_API_KEY}`,
    },
  });
  useEffect(() => {
    if (data && data.spells) {
      setSpells(data.spells);
    }
  }, [data]);
  return (
    <SpellsWrapper>
      {spells.map(spell => (
        <SpellCard key={spell.id} spell={spell} />
      ))}
    </SpellsWrapper>
  );
};

export default Spells;
