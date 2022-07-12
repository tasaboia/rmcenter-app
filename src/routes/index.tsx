import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { useAuth } from '../context';
import Login from '../pages/login';
import Register from '../pages/register';
import Successful from '../pages/register/components/Successful';
import Activated from '../pages/register/components/Activated';
import UserDashboard from '../pages/dashboard/user';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
    <>
     <Stack.Navigator 
         screenOptions={{
            headerShown: false
            }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Successful" component={Successful} />
        <Stack.Screen name="Activated" component={Activated} />
      </Stack.Navigator>
    </>
    )
}
