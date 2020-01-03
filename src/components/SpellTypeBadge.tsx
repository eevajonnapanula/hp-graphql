import React, { FunctionComponent } from 'react';
import { SpellType } from './interfaces';
import styled from 'styled-components';

interface SpellTypeBadgeProps {
  type: SpellType;
}

const typeColors = {
  Charm: '#BDA0BC',
  Enchantment: '#B19994',
  Spell: '#916ECE',
  Hex: '#C1F7DC',
  Curse: '#868694',
  Jinx: '#C3D2D5',
};

const SpellTypeWrapper = styled.div<SpellTypeBadgeProps>`
  background-color: ${props => typeColors[props.type]};
  border-radius: 0.5em;
  padding: 0.4em;
`;

const SpellTypeBadge: FunctionComponent<SpellTypeBadgeProps> = ({ type }) => {
  return <SpellTypeWrapper type={type}>{type}</SpellTypeWrapper>;
};

export default SpellTypeBadge;
