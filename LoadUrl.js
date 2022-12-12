import { WebView } from 'react-native-webview';
import { View, StyleSheet,StatusBar,e,Text } from 'react-native';
import * as React from 'react';

export default function LoadURL({ eturl }) {
  //cosnt get_urls;

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: eturl }}
      />
      {/* <View style={styles.extra}>
        <Text>
          hello
        </Text>
      </View> */}

    </View>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    paddingHorizontal:20,
    backgroundColor:'white',
    marginTop:-50
    },
 });