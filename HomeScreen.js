import React, { useState, useEffect } from 'react';
import { ActivityIndicator,Pressable, Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

export default function HomeScreen({navigation}) {
  const [errorMsg, setErrorMsg] = useState(null);
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('access denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
      let address = await Location.reverseGeocodeAsync(location.coords);
      setAddress(address.reduce(e => e))
      console.log(address.reduce(e => e))
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
  } else if (location, address) {
    text = JSON.stringify(location.latitude);
    text2 = JSON.stringify(location.longitude);
    cityname = JSON.stringify(address.city);
    countryname = JSON.stringify(address.country);
    pincode = JSON.stringify(address.postalCode);
    region = JSON.stringify(address.region);
    // var state=JSON.parse(region)

  }

  return (
    <View style={styles.container}>
      <Text style={styles.locatext}>Your Current Location</Text>
      <Text style={styles.address}>

        City: {cityname} Pincode : {pincode} Region : {region}  Country: {countryname}
      </Text>
      <Text style={styles.paragraph}>
        {text}
      </Text>

      <Text style={styles.paragraph}>
        {text2}</Text>
<View style={styles.buttn}>

       <Pressable
        onPress={ () => navigation.navigate('Home')
        }>
       <Text style={styles.txt1}>
            WebView
          </Text>
      </Pressable>
</View>
       
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  paragraph: {
    fontSize: 28,
    marginVertical: 10,
    textAlign: 'center',
    

  },
  address: {
    fontSize: 25,
    marginHorizontal: 30,
    marginVertical: 20,
    fontWeight: '500',
    backgroundColor:'#fff',
    padding:20,
    borderRadius:20

  },
  locatext:{
    marginVertical: 40,
    fontSize:30,
    fontWeight: '700'
  },
  buttn:{
    
    width:200,
    height:100,
    marginTop:100,
    paddingVertical:20,
 
  },
  txt1:{
    color:'white',
    fontSize:17,
    paddingVertical:15,
    textAlign:"center",
    backgroundColor:'black',
    borderRadius:5,
    fontWeight:'500'
  },
  

});