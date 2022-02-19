import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { RootNavigator } from '@navigators';
import { useBootAuth } from '@stores';

export const App = () => {
  const { boostAuth } = useBootAuth();

  useEffect(() => {
    (async () => {
      await boostAuth();
      SplashScreen.hide();
    })();
  }, []);

  return <RootNavigator />;
};
