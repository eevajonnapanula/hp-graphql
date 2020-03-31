import React from 'react';

import BottomBar from './BottomBar'

export default {
  component: BottomBar,
  title: 'BottomBar',
  excludeStories: /.*Data$/,
}

export const Default = () => {
  return <BottomBar />
}