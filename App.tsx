import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import Routes from './src/routes';
import { AuthProvider } from './src/context';
import Login from './src/pages/login';
import { NavigationContainer } from '@react-navigation/native';

const queryClient = new QueryClient()

export default function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Routes/>
      </NavigationContainer>
    </QueryClientProvider>
  )
}
