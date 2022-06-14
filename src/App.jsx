import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Routing } from './routing';

export const App = () => {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  )
}
