import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import React from 'react';
import { LogBox } from 'react-native';
import { App } from './App';

LogBox.ignoreLogs([
  'RNReactNativeHapticFeedback',
  'Non-serializable values were found in the navigation state',
]);

const queryClient = new QueryClient();

export default () => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <App />
        </SafeAreaProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
};
