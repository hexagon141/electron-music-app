import React from 'react';
import { GlobalStyles } from './global-styles';
import { Player } from './features/player';

export const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Player/>
    </div>
  );
};
