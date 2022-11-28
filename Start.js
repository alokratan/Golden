
import React,{ useRef,useState } from 'react';
import { StyleSheet,View, FlatList,Animated} from 'react-native';
import slides from './slides'


import Startitems from './Startitems';
export default function Start({navigation}) {
  const navig=navigation;
     const [currentIndex,setCurrentIndex]=useState(0);
     const scrollX =useRef(new Animated.Value(0)).current;
     const slidesRef=useRef(null);

     const viewableItemsChanged=useRef(({viewableItems})=>{
         setCurrentIndex(viewableItems[0].index);
     }).current;

   const viewConfig=useRef({viewAreaCoveragePercentThreshold:50}).current;
  return (
    <View style={styles.container}>
        <View style={{flex:3}}>

        <FlatList 
        data={slides}
        renderItem={({item})=><Startitems navi={navig} item={item}/>}
        horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
        bounces={false}
        keyExtractor={(item)=>item.id}
        //  onScroll={Animated.event([{nativeEvent:{contentoffset:{x:scrollX}}}],{
        //      useNativeDriver:false,
        //  })}
        scrollEventThrottle={32}
         onViewableItemsChanged={viewableItemsChanged}
         viewabilityConfig={viewConfig}
         ref={slidesRef}
  
        
      />

        </View>
       

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#fff'
  },
  imag:{
    width:300,
    height:300,
    resizeMode:'stretch'
  },
  teext:{
    fontSize:30,
    fontWeight:'900',
    marginTop:100

  },
  
   
   title:{
    fontSize:30
   },
   btns:{
     color:"black"
   },
  
  
});
