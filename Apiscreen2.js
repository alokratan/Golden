
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View,KeyboardAvoidingView,Pressable, TextInput, Alert } from 'react-native';
import axios from 'axios';
export default function Apiscreen() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [user,setUser]=useState([]);
    // const {username,password}=user;
    const handleSignIn= async ()=>{

      try{
        await axios.get("http://13.126.41.109:8000/api/register/",user)
        console.log("sent");
      }
      catch(err){
        console.log('something went wrong...');
      }




    //  if(email==="alok" && password==="alok123"){
    //     Alert.alert(`Thank you  ${email}`);
    //     console.log(`Thank you  ${email}`);
    //  }

     
    //  else{
    //     Alert.alert('email, password is incorrect')
    //  }
    };
    
  useEffect(() => {

    const getdata = async () => {
      try{
        const abcd = await axios.get("http://13.126.41.109:8000/user/register/");
        setUser(abcd.data);
        console.log("okk");
      
      }
      catch(err){
console.log(err);
      }
     
      
    }
    getdata();
  }, []);


  return (
    <KeyboardAvoidingView style={styles.container}
    behavior="height"
    >
    <View style={styles.innercontainer}>
        <Text style={styles.logintxt}>
          LOGIN SCREEN
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
onPress={handleSignIn }

><Text style={styles.txt1}>
     LOGIN
   </Text>
</Pressable>
<Pressable 
 onPress={()=>alert()}
 >
<Text style={styles.txt2}>
     REGISTER
   </Text>
</Pressable>
</View>
<View>
  {
    user.map((it)=>(
      (
        <View>

        <Text> id :
          {it.username}
        </Text>
        <Text>
          pd:{it.username}
        </Text>
        </View>
      )
    ))
  }
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
      borderRadius:5,
      fontWeight:'500',
      marginHorizontal:10,
      
      borderColor:'black',
      borderWidth:2,
      width:120
    },
    logintxt:{
      fontSize:22,
      color:'#066AC8',
      fontWeight:'900',
      textAlign:'center',
      marginBottom:50
      
    }
    
  
  });
