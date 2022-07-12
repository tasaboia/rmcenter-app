import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import { NativeBaseProvider } from 'native-base';
import Routes from './src/routes';
import { AuthProvider } from './src/context';

const queryClient = new QueryClient()

export default function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider>
        <AuthProvider>
          <Routes/>
        </AuthProvider>
      </NativeBaseProvider>
    </QueryClientProvider>
  )
}
