import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { RootNavigator } from '@navigators';
import { useBootAuth, useBootBlockedCommentIdList } from '@stores';
import { FCMService, NotiService } from '@services';

export const App = () => {
  const { boostAuth } = useBootAuth();
  const { boostBlockedCommentIdList } = useBootBlockedCommentIdList();

  useEffect(() => {
    FCMService.requestPushNotificationPermission();

    (async () => {
      await boostAuth();
      await boostBlockedCommentIdList();

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
