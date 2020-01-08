import React, { FunctionComponent } from 'react';
import { SpellType } from './interfaces';
import styled from 'styled-components';
import {
  charmColor,
  enchantmentColor,
  spellColor,
  hexColor,
  curseColor,
  jinxColor,
} from './themeColors';

interface SpellTypeBadgeProps {
  type: SpellType;
}

const typeColors = {
  Charm: charmColor,
  Enchantment: enchantmentColor,
  Spell: spellColor,
  Hex: hexColor,
  Curse: curseColor,
  Jinx: jinxColor,
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
