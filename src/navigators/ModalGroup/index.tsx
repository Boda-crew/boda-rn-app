import React from 'react';
import { forStackFade } from '@hooks';
import { AlertScreen, ConfirmScreen } from '@screens';
import { palette } from '@styles';
import { Root } from '../config';

export const ModalGroup = () => {
  return (
    <Root.Group
      screenOptions={{
        presentation: 'transparentModal',
        gestureEnabled: false,
        cardStyleInterpolator: forStackFade,
        cardStyle: { backgroundColor: palette.backdrop },
      }}
    >
      <Root.Screen name="Alert" component={AlertScreen} />
      <Root.Screen name="Confirm" component={ConfirmScreen} />
    </Root.Group>
  );
};
