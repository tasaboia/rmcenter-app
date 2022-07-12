import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import UserDashboard from '../../pages/dashboard/user';

const Stack = createNativeStackNavigator();

export default function Private() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false}}>
      <Stack.Screen name="Dashboard" component={UserDashboard} />
    </Stack.Navigator> 
  )
}
