import { StyleSheet, Text, View,Image,useWindowDimensions,Pressable,Alert,Linking} from 'react-native';
import React,{useState} from 'react'




const Startitems = ({item,navi}) => {
  
    const {width}=useWindowDimensions();
    const supportedURL = "https://www.consultit.co.in/";
  
    
  return (
    <View style={[styles.container,{width}]}>
        <Image
        style={[styles.image,{resizeMode:'contain'}]}
        source={item.image}
        />
  <View style={{flex:0.3}}>
    <Text style={styles.title} >{item.title}</Text>
  </View>
  <View style={styles.buttons}>
  
  <View style={styles.dott}>
 <Image
        style={[styles.navimg,{resizeMode:'contain'}]}
        source={item.navimg}
        />
    
</View>

    <Pressable
        onPress={ () => navi.navigate('HomeScreen')
        }>
       <Text style={styles.txt1}>
            NEXT
          </Text>
      </Pressable>
       <Pressable
       
       onPress={
        ()=>Linking.openURL(supportedURL)
       }>
       <Text style={styles.txt2}>
            SKIP
          </Text>
      </Pressable>
      </View> 
    </View>
  )
}

export default Startitems

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
      },

    image:{
       
        marginVertical:50,
        width:330,
        height:330,    
    },
    title:{
        fontWeight:'900',
        fontSize:30,
        color:'black',
        textAlign:'center',
        marginHorizontal:20,
        marginTop:30,
    
    },
    buttons:{
        flex:0.5,
        width:350,
        justifyContent:'flex-end',
        marginBottom:50
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
       txt2:{
         color:'black',
         textAlign:"center",
         marginTop:40,
         fontSize:17,
         textDecorationLine:'underline'
       },
       dott:{
        width:350,
        height:50,
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
        marginVertical:50,
       },
      navimg:{
            width:120,
            height:120
      }

})