import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View,Text} from 'react-native';
import Start from './Start';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import App2 from './App2';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    
   <App2/>
   
    
    //    <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Start">
    //     <Stack.Screen name=" " component={Start} 
    //     options={{
    //       headerStyle: {
    //         backgroundColor: '#fff',
            
    //       },
    //     }}
    //     />
    //     <Stack.Screen name="HomeScreen" component={HomeScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }   

});
