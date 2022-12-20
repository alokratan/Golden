import { StyleSheet, Text,Pressable, View } from 'react-native'
import React from 'react'

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
    <View style={styles.cont}>
      <Text style={styles.text}>Welcome</Text>
      <Text style={styles.text}>To</Text>
      <Text style={styles.text}>Golden Eye</Text>
      <Pressable
        onPress={ () => navigation.navigate('Home')
        }>
       <Text style={styles.txt1}>
            START
          </Text>
      </Pressable>
    </View>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    cont:{
        backgroundColor:'#FFC400',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        paddingVertical:40,
        paddingHorizontal:50,
    },
    text:{
        fontSize:40,
        fontWeight:'900',
        marginVertical:10,
       

    },
    txt1:{
        color:'white',
        fontSize:17,
        width:80,
        height:80,
      paddingTop:25,
        textAlign:"center",
        backgroundColor:'black',
        borderRadius:50,
        fontWeight:'500',
        marginTop:15,
      },
    
})
