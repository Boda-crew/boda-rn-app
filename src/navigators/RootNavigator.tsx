import React from 'react';
import { useRecoilValue } from 'recoil';
import { NavigationContainer } from '@react-navigation/native';
import { theme } from '@styles';
import { authStore } from '@stores';

import { Root } from './config';
import { PrivateGroup } from './PrivateGroup';
import { PublicGroup } from './PublicGroup';
import { ModalGroup } from './ModalGroup';

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
