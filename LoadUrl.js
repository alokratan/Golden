import { WebView } from 'react-native-webview';
import { View, StyleSheet} from 'react-native';
import * as React from 'react';

export default function LoadURL({ eturl }) {


  return (
    <View style={styles.container}>
      
      <WebView
        source={{ uri: eturl }}
      />

    </View>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 0.9,
  
   
    },
 });