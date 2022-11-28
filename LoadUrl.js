import { WebView } from 'react-native-webview';
import { View } from 'react-native';
import * as React from 'react';

export default function LoadURL({ eturl }) {
  //cosnt get_urls;

  return (
    <View style={{ flex: 1, }}>
      <WebView
        source={{ uri: eturl }}
      />
    </View>
  );
}
