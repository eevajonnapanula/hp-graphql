import React, { FunctionComponent } from 'react';
import { Spell } from '../interfaces';
import SpellTypeBadge from './SpellTypeBadge';
import { useMutation } from '@apollo/react-hooks';
import { TOGGLE_SPELL_SELECT } from '../queries';
import { SpellCardContainer, Row } from './styles';

interface SpellCardProps {
  spell: Spell;
}

const SpellCard: FunctionComponent<SpellCardProps> = ({ spell }) => {
  const [toggleSelect] = useMutation(TOGGLE_SPELL_SELECT);
  const handleClick = async () => {
    await toggleSelect({ variables: { id: spell.id } });
  };

  return (
    <SpellCardContainer selected={spell.isSelected} onClick={handleClick}>
      <Row multiple>
        <h1> {spell.spell}</h1>
        <SpellTypeBadge type={spell.type} />
      </Row>
      <p>{spell.effect}</p>
    </SpellCardContainer>
  );
};

export default SpellCard;
