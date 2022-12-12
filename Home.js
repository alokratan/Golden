import * as React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import LoadURL from './LoadUrl';
import { useState,useEffect } from 'react';
import dayjs from 'dayjs';
import Camera from './Camera'
export default function Home() {
  const [times,setTimes]=useState(dayjs());
  useEffect(()=>{
    const intervel=setInterval(()=>{
      setTimes(dayjs());
    },1);
   return()=>clearInterval(intervel)
   },[]);


  return (
    <View style={styles.container}>
      <LoadURL name="HOMEPAGE" eturl="https://geyeapp.consultit.co.in/ords/r/goldeneye/goldeneye/login1?session=22332654580542" />
  <View style={styles.container2}>
   
  <Text style={styles.textt}>{times.format("HH:mm:ss")}</Text>
  </View>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    },
    textt:{
      fontSize:45,
      fontWeight:'900'

    }
  ,
  container2:{
    flex:0.1,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center'
  },

 });
