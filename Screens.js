import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import Apiscreen from './Apiscreen';
import RegisterScreen from './RegisterScreen';
import Camera from './Camera';

import Otpfire from './Otpfire';
import Welcome from './Welcome';

const Stack = createNativeStackNavigator();
function Screens() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen" 
      screenOptions={{ headerStyle: { backgroundColor: '#066AC8'},headerTintColor:'white',statusBarStyle:'dark'}} >
        <Stack.Screen name="GOLDENEYE" component={HomeScreen} />
       <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} /> 
        <Stack.Screen name="GOLDEN" component={Apiscreen} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="Otpfir" options={{ title: 'OTP Verification',headerTitleStyle:{
          fontWeight:'900'
        } }}  component={Otpfire} />
        
        
        {/* <Stack.Screen name="Home"  options={{ headerShown:false }} component={Home} /> */}
        <Stack.Screen name="Home"  options={{ title: 'GOLDENEYE',headerTitleStyle:{
          fontWeight:'900'
        } }} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default Screens;
