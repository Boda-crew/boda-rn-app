import { AuthService } from '@services';
import { theme } from '@styles';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Root from './Root';
import { ModalGroup, PrivateGroup, PublicGroup } from './Groups';

export const RootNavigator = () => {
  return (
    <NavigationContainer theme={theme}>
      <Root.Navigator screenOptions={{ headerShown: false }}>
        {AuthService.hasAuth() ? PrivateGroup() : PublicGroup()}
        {ModalGroup()}
      </Root.Navigator>
    </NavigationContainer>
  );
};
