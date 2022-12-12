import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
     
      </Camera>
      <TouchableOpacity style={styles.tochabe} onPress={toggleCameraType}>
            <Text style={styles.text3}>Flip Camera</Text>
          </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems:'center',
    
  },
  camera: {
    width:'90%',
    height:'60%',
    margin:20,
    borderRadius:20,

  },
  tochabe:{
    backgroundColor:'black',
    width:'100%'

  },
  
  text3:{
    fontSize: 23,
    fontWeight: 'bold',
    color: 'white',
    textAlign:'center',
    marginVertical:10,
    textTransform:'uppercase',
    fontWeight:'900'
  }
});
