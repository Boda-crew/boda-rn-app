import 'react-native-gesture-handler';
import codePush from 'react-native-code-push';
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
const codePushOptions = {
  // checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  updateDialog: true,
  installMode: codePush.InstallMode.IMMEDIATE,
};

export default codePush(codePushOptions)(() => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <App />
        </SafeAreaProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
});
