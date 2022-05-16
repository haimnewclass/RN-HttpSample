import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button, ScrollView } from 'react-native';
import axios from 'axios';
import {useState} from 'react';

export default function App() {
  const [arr,setArr] = useState([]);
  console.log('start');
  return (
    <View style={styles.container}>
      <Text>HTTP 3</Text>
      <StatusBar style="auto" />
      <View  style={{marginTop:15}}>
    
        
        <Button title='Get HTTP2' style={{marginTop:15}} onPress={ ()=>{
          alert('call to http2');
          console.log('call to http');

          axios.get('https://jsonplaceholder.typicode.com/todos')
          .then((response)=>{
              console.log(response.data);
              setArr(response.data);
          }).catch((err)=>{
            alert(err.response);
          })
    

        }} />
      </View>
      <ScrollView>

      {arr?.map((x)=>{

        return (<View>
          <Text>{x?.title}</Text>
        </View>)
      })}

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
