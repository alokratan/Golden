
import { useState } from 'react';
import { StyleSheet, Text, View,KeyboardAvoidingView,Pressable, TextInput } from 'react-native';
import { auth } from './firebase-config';
import {createUserWithEmailAndPassword} from  "firebase/auth"
export default function RegisterScreen({navigation}) {
 const [email,setEmail]=useState('');
 const [password,setPassword]=useState('');
 
const handleSignUp= async ()=>{
    await createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
      
    // alert('LOGIN SUCCESSFULLY...')
        console.log("Created successfully.... your email address is =>",email,"password is:", password)
       
       alert('Congratulations, Account Created Successfully:',email);
    })
    .catch(err=>{
   
      console.log("signup faild",email)
      alert('Invalid Credentials....');
    })
}
  return (
    <KeyboardAvoidingView style={styles.container}
    behavior="padding">
    <View style={styles.innercontainer}>
        <Text style={styles.logintxt}>
          REGISTER SCREEN
        </Text>
        <TextInput
        placeholder='Email'
         value={email}
         onChangeText={text=>setEmail(text)}
        style={styles.input}  
        
        />
        <TextInput
        placeholder='Password'
        value={password}
         onChangeText={text=>setPassword(text)}
        style={styles.input}
        secureTextEntry
        
        />
   
    <View style={styles.buttn}>

<Pressable
onPress={handleSignUp }

><Text style={styles.txt1}>
REGISTER 
   </Text>
</Pressable>
<Pressable 
 onPress={()=>navigation.navigate('Login')}
 >
<Text style={styles.txt2}>
     LOGIN
   </Text>
</Pressable>
</View>
</View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innercontainer:{
backgroundColor:'#ddd',
paddingHorizontal:20,
paddingVertical:40,
borderRadius:25,


  },
  input:{
    borderBottomWidth:2,
    borderBottomColor:'black',
    width:300,
    marginVertical:20,
    height:40,
    fontSize:15
  },
  buttn:{

    height:'auto',
    marginTop:50,
    flexDirection:'row',
  },
  txt1:{
    color:'white',
    fontSize:15,
    paddingVertical:12,
    paddingHorizontal:20,
    textAlign:"center",
    backgroundColor:'black',
    borderRadius:5,
    fontWeight:'500',
    marginHorizontal:10,
    width:120,
    borderColor:'black',
    borderWidth:2,
  },
  txt2:{
    color:'black',
    fontSize:15,
    paddingVertical:12,
    paddingHorizontal:20,
    textAlign:"center",
    // backgroundColor:'#ffffff',
    borderRadius:5,
    fontWeight:'500',
    marginHorizontal:10,
    width:120,
    borderColor:'black',
    borderWidth:2,
  },
  logintxt:{
    fontSize:22,
    color:'#066AC8',
    fontWeight:'900',
    textAlign:'center',
    marginBottom:50
    
  }
  

});
