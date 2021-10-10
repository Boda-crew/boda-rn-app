import { useAuthActions, usePreventAndroidExit } from '@hooks';
import { RootNavigator } from '@navigators';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RecoilRoot } from 'recoil';

const App = () => {
  const { boostAuth } = useAuthActions();

  useEffect(() => {
    (async () => {
      await boostAuth();
    })();
  }, []);

  usePreventAndroidExit();

  return (
    <RecoilRoot>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </RecoilRoot>
  );
};
export default App;
