import React, { FunctionComponent, useState } from 'react';
import { Spell } from './interfaces';
import styled from 'styled-components';
import SpellTypeBadge from './SpellTypeBadge';
import {
  boxShadow,
  selectedCardColor,
  cardBackgroundColor,
} from './themeColors';

interface SpellCardProps {
  spell: Spell;
}

interface SpellCardContainerProps {
  selected: boolean;
}

const SpellCardContainer = styled.div<SpellCardContainerProps>`
  display: flex;
  flex-direction: column;
  max-width: 17em;
  margin-bottom: 1em;
  border-radius: 0.25em;
  padding: 1em;
  background-color: ${props =>
    props.selected ? selectedCardColor : cardBackgroundColor};
  -webkit-box-shadow: ${boxShadow};
  -moz-box-shadow: ${boxShadow};
  box-shadow: ${boxShadow};
`;

interface RowProps {
  multiple?: boolean;
}

const Row = styled.div<RowProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${props =>
    props.multiple ? 'space-between' : 'flex-start'};
  align-items: baseline;
`;

const SpellCard: FunctionComponent<SpellCardProps> = ({ spell }) => {
  const [selected, setSelected] = useState<boolean>(false);

  const handleClick = () => {
    setSelected(!selected);
  };
  return (
    <SpellCardContainer selected={selected} onClick={handleClick}>
      <Row multiple>
        <h1> {spell.spell}</h1>
        <SpellTypeBadge type={spell.type} />
      </Row>
      <p>{spell.effect}</p>
    </SpellCardContainer>
  );
};

export default SpellCard;
