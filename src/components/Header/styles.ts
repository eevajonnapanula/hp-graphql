import styled from 'styled-components';
import { boxShadow, cardBackgroundColor } from '../themeColors';

export const StyledHeader = styled.header`
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

export const Checkbox = styled.input.attrs(props => ({
  type: 'checkbox',
}))`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + .slider {
    background-color: #2196f3;
  }

  &:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  &:checked + .slider:before {
    -webkit-transform: translateX(1.35em);
    -ms-transform: translateX(1.35em);
    transform: translateX(1.35em);
    background-color: #ffcf96;
  }

  &:checked + span > .detail {
    opacity: 1;
  }

  &:checked + span > .detail:before {
    opacity: 1;
  }

  &:checked + span > .detail:after {
    opacity: 1;
  }
`;

export const Slider = styled.span`
  position: relative;
  width: 2.5em;
  height: 1.1em;
  background-color: #87ceeb;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: '';
    width: 1.25em;
    height: 1.25em;
    left: -0.05em;
    bottom: -0.05em;
    background-color: #fad76e;
    border-radius: 50px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    transition: all 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transform: rotate(-45deg);
  }
`;

export const Detail = styled.span`
  position: absolute;
  background-color: #e8cda5;
  z-index: 2;
  transition: opacity 5ms ease-in;
  transition-delay: 200ms;
  border-radius: 100%;
  opacity: 0;
  left: 1.5em;
  bottom: 0.6em;
  width: 0.15em;
  height: 0.15em;

  &:before {
    position: absolute;
    background-color: #e8cda5;
    z-index: 2;
    opacity: 0;
    transition-delay: 200ms;
    transition: opacity 200ms ease-in-out;
    border-radius: 100%;
    left: 0.45em;
    bottom: 0.13em;
    width: 0.25em;
    height: 0.25em;
    content: '';
  }

  &:after {
    position: absolute;
    background-color: #e8cda5;
    z-index: 2;
    opacity: 0;
    transition-delay: 200ms;
    transition: opacity 200ms ease-in-out;
    border-radius: 100%;
    left: 0.25em;
    bottom: -0.4em;
    width: 0.2em;
    height: 0.2em;
    content: '';
  }
`;
