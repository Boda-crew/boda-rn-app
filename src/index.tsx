import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import React from 'react';
import { App } from './App';

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
