import React, { FunctionComponent } from 'react';
import DarkModeSwitch from './DarkModeSwitch';
import { StyledHeader } from './styles';

const Header: FunctionComponent = () => {
  return (
    <StyledHeader>
      <h1>Spells</h1>
      <DarkModeSwitch />
    </StyledHeader>
  );
};

export default Header;
