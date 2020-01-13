import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Spell } from '../interfaces';
import SpellCard from './SpellCard';
import { SpellsWrapper } from './styles';
import { GET_SPELLS } from '../queries';

const Spells = () => {
  const [spells, setSpells] = useState<Spell[]>([]);
  const { data } = useQuery(GET_SPELLS, {
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
