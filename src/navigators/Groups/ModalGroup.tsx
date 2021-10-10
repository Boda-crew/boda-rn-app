import { forStackFade } from '@hooks';
import { AlertScreen } from '@screens/ModalGroup';
import { palette } from '@styles';
import React from 'react';
import Root from '../Root';

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
    </Root.Group>
  );
};
