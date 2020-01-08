import theme from 'styled-theming';

export const backgroundColor = theme('mode', {
  light: '#fffafa',
  dark: '#575A5D',
});

export const boxShadow = theme('mode', {
  light: '0.05em 0.05em 0.25em 0em rgba(0, 0, 0, 0.75)',
  dark: '0.05em 0.05em 0.25em 0em rgba(0, 0, 0, 0.75)',
});

export const textColor = theme('mode', {
  light: '#323639',
  dark: '#fffafa',
});

export const cardBackgroundColor = theme('mode', {
  light: '#fffafa',
  dark: '#25282A',
});

export const selectedCardColor = theme('mode', {
  light: '#D1CDCD',
  dark: '#443333',
});

export const charmColor = theme('mode', {
  light: '#80A1C1',
  dark: '#5E768D',
});

export const enchantmentColor = theme('mode', {
  light: '#FAD76E',
  dark: '#584B27',
});

export const spellColor = theme('mode', {
  light: '#87CEEB',
  dark: '#36525E',
});

export const hexColor = theme('mode', {
  light: '#FFCF96',
  dark: '#594835',
});

export const curseColor = theme('mode', {
  light: '#A7A7B1',
  dark: '#4A4A51',
});

export const jinxColor = theme('mode', {
  light: '#5DB2F6',
  dark: '#15609B',
});
