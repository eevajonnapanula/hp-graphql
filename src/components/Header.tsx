import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { boxShadow, cardBackgroundColor } from './themeColors';
import DarkModeSwitch from './DarkModeSwitch';
import { ThemeType } from './interfaces';

interface HeaderProps {
  toggleTheme: () => void;
  theme: ThemeType;
}

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  background-color: ${cardBackgroundColor}
  justify-content: space-between;
  align-items: center;
  -webkit-box-shadow: ${boxShadow};
  -moz-box-shadow: ${boxShadow};
  box-shadow: ${boxShadow};
  padding: 0.25em;
  padding-left: 1em;
  padding-right: 1em;
`;

const Header: FunctionComponent<HeaderProps> = ({ toggleTheme, theme }) => {
  return (
    <StyledHeader>
      <h1>Spells</h1>
      <DarkModeSwitch handleClick={toggleTheme} theme={theme} />
    </StyledHeader>
  );
};

export default Header;
