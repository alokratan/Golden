import { StyleSheet, Text,Image, View } from 'react-native'
import React,{ useState} from 'react'
import slides from './slides'
import AppIntroSlider from 'react-native-app-intro-slider';
import Home from './Home';
import HomeScreen from './HomeScreen';
import Screens from './Screens';

const App2 = () => {
    const [showhome,setShowhome]=useState(false);

    const nxtbtn=(label)=>{
return(
    <View style={{padding:13,
        backgroundColor:'black',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:40,     
        marginHorizontal:20,
    
    }}>
        <Text style={{color:'white',
        fontSize:20,
        textTransform:'uppercase',
        fontWeight:'700',
        letterSpacing:0.5
    
}}>
            {label}
        </Text>
    </View>
)
    }

    const skipbtn=(label)=>{
        return(
            <View style={{padding:10,
                marginBottom:40,
                marginHorizontal:20,
                justifyContent:'center',
                alignItems:'center'
            
            }}>
                <Text style={{color:'black',
                fontSize:20,
                textDecorationLine:'underline',
                textTransform:'uppercase',
                fontWeight:'700'
            
        }}>
                    {label}
                </Text>
            </View>
        )
            }
    if(!showhome) {
        return(
            <AppIntroSlider
            data={slides}
            renderItem={({item})=>{
                return (
                    <View style={styles.container}>
                        <Image
                          style={[styles.image,{resizeMode:'contain'}]}
                          source={item.image}
                        />
                          <View>
    <Text style={styles.title}>{item.title}</Text>
  </View>
                    </View>
                )
            }}
            dotStyle={styles.mdots}
            activeDotStyle={styles.dots}
            renderNextButton={()=>nxtbtn("Next")}
            showSkipButton
            renderSkipButton={()=>skipbtn("Skip")}
            renderDoneButton={()=>nxtbtn("done")}
            bottomButton
            onDone={()=>{
                setShowhome(true);
            }}
        
                        />
        )
    }
  return (
// <Home/>
  // <HomeScreen/>
  <Screens/>
  )
}

export default App2

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor:'#fff'
    
      },
      image:{
        marginVertical:100,
        width:330,
        height:330,    
    },
    title:{
        fontWeight:'900',
        fontSize:33,
        color:'black',
        textAlign:'center',
        marginHorizontal:20,
        marginTop:5,
    
    },

    mdots:{
       
        backgroundColor:'#FFC400',
        width:16,
        height:16,
        borderRadius:10,
        marginBottom:90,
        
    },
    dots:{
       
        backgroundColor:'black',
        width:22,
        height:22,
        borderRadius:20,
        marginBottom:90,
        
    }
})