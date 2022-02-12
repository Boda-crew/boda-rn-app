import { usePreventAndroidExit } from '@hooks';
import { RootNavigator } from '@navigators';
import { useBootAuth } from '@stores';
import React, { useEffect } from 'react';

export const App = () => {
  const { boostAuth } = useBootAuth();

  useEffect(() => {
    (async () => {
      await boostAuth();
    })();
  }, []);

  usePreventAndroidExit();

  return <RootNavigator />;
};
