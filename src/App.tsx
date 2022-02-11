import { usePreventAndroidExit } from '@hooks';
import { RootNavigator } from '@navigators';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { useBootAuth } from './stores';

const queryClient = new QueryClient();

const App = () => {
  const { boostAuth } = useBootAuth();

  useEffect(() => {
    (async () => {
      await boostAuth();
    })();
  }, []);

  usePreventAndroidExit();

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <RootNavigator />
        </SafeAreaProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
};
export default App;
