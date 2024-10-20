import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../pages/HomeScreen'; 
import LoginScreen from '@/pages/loginScreen';
import RegisterScreen from '@/pages/RegisterScreen';
import MapScreen from '@/pages/MapScreen';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={MapScreen} 
          options={{ headerShown: false }} 
        />
       
   


      </Stack.Navigator>


    </NavigationContainer>
  );
}


