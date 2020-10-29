import React from 'react';

import { HeroProvider } from './hero';

const AppProvider: React.FC = ({ children }) => (
  <HeroProvider>{children}</HeroProvider>
);

export default AppProvider;
