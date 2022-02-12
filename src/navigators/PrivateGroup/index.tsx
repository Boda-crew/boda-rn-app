import React from 'react';
import { BolierScreen } from '@screens';

import { headerOptions, Root } from '../config';
import { BottomTabNavigator } from './BottomTabNavigator';

export const PrivateGroup = () => {
  return (
    <Root.Group screenOptions={{ ...headerOptions, headerShown: false }}>
      <Root.Screen name="HomeTab" component={BottomTabNavigator} />
      <Root.Screen name="Setting" component={BolierScreen} />
    </Root.Group>
  );
};
