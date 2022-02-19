import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { RootNavigator } from '@navigators';
import { useBootAuth } from '@stores';
import { FCMService, NotiService } from '@services';

export const App = () => {
  const { boostAuth } = useBootAuth();

  useEffect(() => {
    FCMService.requestPushNotificationPermission();

    (async () => {
      await boostAuth();

      NotiService.clearBadgeCount();
      const foregroundListener = FCMService.foregroundListener();
      const refreshTokenListener = FCMService.refreshTokenListener();

      SplashScreen.hide();

      return () => {
        foregroundListener();
        refreshTokenListener();
      };
    })();
  }, []);

  return <RootNavigator />;
};
