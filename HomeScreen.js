import React, { useState, useEffect } from 'react';
import { ActivityIndicator,Pressable, Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import * as Battery from "expo-battery";
import * as Device from "expo-device";

// import Svg, { Path, Rect } from "react-native-svg";
export default function HomeScreen({navigation}) {
  
  const [errorMsg, setErrorMsg] = useState(null);
  const [location, setLocation] = useState(null);
  const [dataitems, setdataitems] = useState(null);
   const [level, setLevel] = useState(0);
  const [model,setModel]=useState(null);
  const [brand,setBrand]=useState(null);
  const [opera,setOpera]=useState(null);
  const [operav,setOperav]=useState(null);
  // var datetime=moment().utcOffset('+05:30').format('hh:mm:ss a')
  // const [time,setTime]=useState(datetime);
  
  var batte=parseInt(level*100)
  
 

  useEffect(() => {
    (async () => {
      const currentLevel = await Battery.getBatteryLevelAsync();
      setLevel(currentLevel);
     
    })();


    const devicemodel=()=>{
      setBrand(Device.manufacturer)
      setModel(Device.osVersion)
      setOpera(Device.osName)
      setOperav(Device.modelName)
    }
      
    devicemodel();
    const subscription = Battery.addBatteryLevelListener(({ batteryLevel }) =>
      setLevel(batteryLevel)
    
    );
    return () => subscription.remove();
  }, []);
  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('access denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
      let dataitems = await Location.reverseGeocodeAsync(location.coords);
      setdataitems(dataitems.reduce(e => e))
      
    })();
  }, []);



  
  let text = <ActivityIndicator style={styles.indi} size={50} color="black"/>
  let text2;
  let cityname;
  let countryname;
  let pincode;
  let region;
  if (errorMsg) {
    text = errorMsg;
    text2 = errorMsg;
    cityname = errorMsg;
    countryname = errorMsg;
    pincode = errorMsg;
    region = errorMsg;
  } else if (location, dataitems) {
    text = JSON.stringify(location.latitude);
    text2 = JSON.stringify(location.longitude);
    cityname = JSON.stringify(dataitems.city);
    countryname = JSON.stringify(dataitems.country);
    pincode = JSON.stringify(dataitems.postalCode);
    region = JSON.stringify(dataitems.region);
    // var state=JSON.parse(region)

  }
  

  return(
    <View style={styles.container}>
       {/* <Svg style={styles.svg} viewBox="0 0 24 24" fill="none">
      <Rect x="1" y="6" width={18 * level} height="11" fill="#2ecc71" />
      <Path
        d="M17 6H3a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2zM23 13v-2"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg> */}
      <Text style={styles.locatext}>Your Current Location</Text>
      <View style={styles.dataitemclass}>
      <Text style={styles.dataitems}>City: {cityname}</Text>
      <Text style={styles.dataitems}>Pincode : {pincode}</Text>
      <Text style={styles.dataitems}>Region : {region}</Text>
      <Text style={styles.dataitems}>Country: {countryname}</Text>
      </View>
      

      <Text style={styles.locatext}>Device Information</Text>
      <View style={styles.dataitemclass}>
      <Text style={styles.dataitems}>OS : {opera}</Text>
      <Text style={styles.dataitems}>OS Version : {model}</Text>
      <Text style={styles.dataitems}>Model : {operav}</Text>
      <Text style={styles.dataitems}>Brand : {brand}</Text>
      <Text style={styles.dataitems}>Device Battery : {batte}% <View style={styles.batt}>
        <View style={styles.batt2}></View>
        </View></Text>  
        <Text style={styles.dataitems}>Camera : <Pressable
        onPress={ () => navigation.navigate('Camera')
        }>
       <Text style={styles.txt4}>
            OPEN
          </Text>
      </Pressable></Text>      
      {/* <Text style={styles.dataitems}>Currunt Time : {time}</Text>         */}
      </View>
      
      <Text style={styles.paragraph}>Latitude: {text}
      </Text>

      <Text style={styles.paragraph}>Longitude: {text2}</Text>
<View style={styles.buttn}>

       <Pressable
        onPress={ () => navigation.navigate('Home')
        }>
       <Text style={styles.txt1}>
            Let's Go
          </Text>
      </Pressable>
      </View>
      <View style={styles.buttn2}>
      <Pressable
        onPress={ () => navigation.navigate('Login')
        }>
       <Text style={styles.txt3}>
            Login
          </Text>
      </Pressable>
      <Pressable
        onPress={ () => navigation.navigate('Register')
        }>
       <Text style={styles.txt3}>
            Register
          </Text>
      </Pressable>
      
     
</View>
     
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  dataitemclass:{
    width:'90%',
    marginVertical:20,

  },
  paragraph: {
    fontSize: 20,
    marginTop: 22,
    textAlign: 'left',
    fontWeight: '700'
    

  },
  dataitems: {
    fontSize: 20,
    marginVertical: 5,
    fontWeight: '500',
    // backgroundColor:'#fff',
    color:'#222999',
  },
  locatext:{
    marginVertical: 5,
    fontSize:25,
    fontWeight: '700'
  },
  buttn:{
    width:200,   
    marginTop:30,
    paddingVertical:10, 
  },
  buttn2:{
flexDirection:'row',
marginVertical:20,
  },
  txt1:{
    color:'white',
    fontSize:17,
    paddingVertical:15,
    textAlign:"center",
    backgroundColor:'black',
    borderRadius:5,
    fontWeight:'500',
    marginVertical:5,
  },

  txt3:{
    color:'white',
    fontSize:15,
    paddingVertical:12,
    paddingHorizontal:20,
    textAlign:"center",
    backgroundColor:'#066AC8',
    borderRadius:5,
    fontWeight:'500',
    marginHorizontal:10,
    width:120,
   
  },
  txt4:{
    color:'white',
    fontSize:14,
    textAlign:"center",
    backgroundColor:'#857',
    borderRadius:3,
    fontWeight:'500',
    width:60,
   padding:5,
   marginLeft:10,
  }
  // batt:{
  //   backgroundColor:'red',
  //   width:60,
  //   height:20,
  //   borderWidth:2,
  // },
  // batt2:{
  //   backgroundColor:'blue',
  //   width:battee,
  //   height:20,
  //   borderWidth:2,
  // }
  

});