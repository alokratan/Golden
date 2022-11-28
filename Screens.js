import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import HomeScreen from './HomeScreen';
const Stack = createNativeStackNavigator();
function Screens() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen" 
      screenOptions={{ headerStyle: { backgroundColor: '#FFC400'},headerTintColor:'black',statusBarColor:'#FFC400',statusBarStyle:'dark'}} >
        <Stack.Screen name="GOLDENEYE" component={HomeScreen} />
        <Stack.Screen name="Home" options={{ title: 'GOLDENEYE' }} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Screens;
