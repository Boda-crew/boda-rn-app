import { theme } from '@styles';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Root from './Root';
import { ModalGroup, PrivateGroup, PublicGroup } from './Groups';
import { useRecoilValue } from 'recoil';
import { authStore } from '@stores';

export const RootNavigator = () => {
  const auth = useRecoilValue(authStore);

  return (
    <NavigationContainer theme={theme}>
      <Root.Navigator screenOptions={{ headerShown: false }}>
        {!!auth ? PrivateGroup() : PublicGroup()}
        {ModalGroup()}
      </Root.Navigator>
    </NavigationContainer>
  );
};
