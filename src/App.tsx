import React from 'react';
import { Routes } from 'Routes';

import GlobalStyles from './themes/GlobalStyles';

const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Routes />
    </div>
  );
};

export default App;
