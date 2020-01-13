import styled from 'styled-components';
import {
  cardBackgroundColor,
  boxShadow,
  textColor,
  spellColor,
} from '../themeColors';

export const StyledBottomBar = styled.footer`
  background-color: ${cardBackgroundColor};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 1em;
  -webkit-box-shadow: ${boxShadow};
  -moz-box-shadow: ${boxShadow};
  box-shadow: ${boxShadow};
`;

export const Button = styled.button`
  border: 0.1em solid ${spellColor};
  color: ${textColor}
  background-color: ${cardBackgroundColor};
  padding: 1em;
  border-radius: 0.25em;
  text-transform: uppercase;

  &:focus {
    border: 0.1em solid ${cardBackgroundColor};
    color: ${textColor}
  background-color: ${spellColor};
  }

  &:hover {
  }
`;
