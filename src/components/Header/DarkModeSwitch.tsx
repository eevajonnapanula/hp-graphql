import React, { FunctionComponent } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_THEME, TOGGLE_SELECTED } from '../queries';
import { Checkbox, Detail, Slider } from './styles';

const DarkModeSwitch: FunctionComponent = () => {
  const { data } = useQuery(GET_THEME);
  const [toggleTheme] = useMutation(TOGGLE_SELECTED);
  const handleClick = () => {
    toggleTheme();
  };
  return (
    <>
      <Checkbox
        checked={data.theme.mode === 'dark'}
        name="checkbox"
        onChange={handleClick}
      />
      <Slider className="slider" onClick={handleClick}>
        <Detail className="detail" />
      </Slider>
    </>
  );
};

export default DarkModeSwitch;
