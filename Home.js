import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import LoadURL from './LoadUrl';

export default function Home() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.paragraph}>GOLDEN EYE</Text> */}
      <LoadURL name="HOMEPAGE" eturl="https://google.com" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
 });
