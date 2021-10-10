import React from 'react';
import BolierScreen from '@screens/BolierScreen';
import Root from '../Root';
import BottomTabNavigator from '../BottomTabNavigator';

export const PrivateGroup = () => {
  return (
    <Root.Group screenOptions={{ headerShown: false }}>
      <Root.Screen name="HomeTab" component={BottomTabNavigator} />
      <Root.Screen name="Setting" component={BolierScreen} />
    </Root.Group>
  );
};
