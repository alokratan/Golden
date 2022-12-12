
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import axios from 'axios';
export default function Apiscreen() {
  const [user, setUser] = useState([]);
  useEffect(() => {

    const getdata = async () => {
      const abcd = await axios.get("https://jsonplaceholder.typicode.com/albums");
      setUser(abcd.data)
    }
    getdata();
  }, []);


  return (
    <View style={styles.data}>
      {/*     
{
  user.map((a)=>{
    return(
<ScrollView key={a.id}>

    <Text >
      {a.title}
     </Text>
</ScrollView>

    )
  })
} */}

      <FlatList
        data={user}
        style={styles.helmain}
        renderItem={({ item }) => {
          return <View style={styles.boxmain}>
 <Text style={styles.textflat} >
      {item.title}
     </Text>
          </View>}}
            />

    </View>
  );
}

const styles = StyleSheet.create({
  data: {
    flex: 1,
    width: '100%',
    height: 'auto',
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'flex-start',

  },
  helmain:{
    marginVertical:20,
  },
  textflat:{
    padding:10,
    fontSize:20,
    backgroundColor:'#fff',
    marginVertical:10
  }

});
