import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { boxShadow } from './themeColors';
import DarkModeSwitch from './DarkModeSwitch';
import { ThemeType } from './interfaces';

interface HeaderProps {
  toggleTheme: () => void;
  theme: ThemeType;
}

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  -webkit-box-shadow: 0.05em 0.05em 0.25em 0em ${boxShadow};
  -moz-box-shadow: 0.05em 0.05em 0.25em 0em ${boxShadow};
  box-shadow: 0.05em 0.05em 0.25em 0em ${boxShadow};
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
