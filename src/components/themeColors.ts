import theme from 'styled-theming';

export const backgroundColor = theme('mode', {
  light: '#fff',
  dark: '#323639',
});

export const boxShadow = theme('mode', {
  light: 'rgba(0, 0, 0, 0.75)',
  dark: 'rgba(255, 255, 255, 0.75)',
});

export const textColor = theme('mode', {
  light: '#323639',
  dark: '#FFF',
});

export const selectedCardColor = theme('mode', {
  light: '#e3e3e4',
  dark: '#666666',
});
