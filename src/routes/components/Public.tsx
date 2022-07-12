import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Login from '../../pages/login';
import Register from '../../pages/register/Index';

const AuthStack = createNativeStackNavigator();

export default function Public() {
  
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false}}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
    </AuthStack.Navigator> 
  )
}
