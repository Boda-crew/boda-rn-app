import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useRecoilValue } from 'recoil';
import { authToken } from '@hooks';
import Root from './Root';
import { ModalGroup, PrivateGroup, PublicGroup } from './Groups';
import { theme } from '@styles';

const RootNavigator = () => {
  const hasAuth = !!useRecoilValue(authToken);

  return (
    <NavigationContainer theme={theme}>
      <Root.Navigator screenOptions={{ headerShown: false }}>
        {hasAuth ? PrivateGroup() : PublicGroup()}
        {ModalGroup()}
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
