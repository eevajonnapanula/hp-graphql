import styled from 'styled-components';
import {
  boxShadow,
  selectedCardColor,
  cardBackgroundColor,
} from '../themeColors';

interface SpellCardContainerProps {
  selected: boolean;
}

export const SpellCardContainer = styled.div<SpellCardContainerProps>`
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

export const Row = styled.div<RowProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${props =>
    props.multiple ? 'space-between' : 'flex-start'};
  align-items: baseline;
`;

export const SpellsWrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
  justify-content: center;
  align-items: baseline;
  margin: 1em;
  grid-gap: 1em;
`;
