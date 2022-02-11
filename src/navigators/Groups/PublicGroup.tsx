import { LoginScreen } from '@screens';
import React from 'react';
import Root from '../Root';

export const PublicGroup = () => {
  return (
    <Root.Group>
      <Root.Screen name="Login" component={LoginScreen} />
    </Root.Group>
  );
};
