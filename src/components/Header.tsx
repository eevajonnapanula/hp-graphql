import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  -webkit-box-shadow: 0.05em 0.05em 0.25em 0em rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0.05em 0.05em 0.25em 0em rgba(0, 0, 0, 0.75);
  box-shadow: 0.05em 0.05em 0.25em 0em rgba(0, 0, 0, 0.75);
  padding: 0.25em;
  padding-left: 1em;
`;

const Header: FunctionComponent = () => {
  return (
    <StyledHeader>
      <h1>Spells</h1>
    </StyledHeader>
  );
};

export default Header;
