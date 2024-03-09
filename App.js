
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useRef, useState} from "react"


export default function App() {

  const [readCount,updateCount]=useState(0);
  const time=useRef();
  function counter() {
    updateCount(readCount+1);
  }
  function minusCounter() {
    if (readCount>0){
      updateCount(readCount-1)

    }
    
  };
  function resetCounter() {
    updateCount(0)
  }
  function stopCount() {
    clearInterval(time.current)
  }
  function startCount(){
    time.current=setInterval(()=>{
      updateCount(prev=>prev +1);
    },1000);
  }


  
  


  return (
    <View style={styles.container}>
    <View>
      <Text style={styles.text}>{readCount}</Text>
     <View>
    <TouchableOpacity style={styles.button2}  onPress={counter}>
      <Text style={styles.inner}>Update</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button2}  onPress={minusCounter}>
      <Text style={styles.inner}>Less</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button2}  onPress={resetCounter}>
      <Text style={styles.inner}>Reset</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button2}  onPress={startCount}>
      <Text style={styles.inner}>Start</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button2}  onPress={stopCount}>
      <Text style={styles.inner}>Stop</Text>
    </TouchableOpacity>
     </View>
    </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white",
    justifyContent:"center",
    alignItems:"center",
  },
  button2:{
    borderWidth:1,
    height:40,
    width:300,
    borderColor:"gray" ,
    backgroundColor:"green",
    marginTop:20,
    borderRadius:10,
  },
  inner:{
    textAlign:"center",
    padding:5,
    fontSize:20,
    letterSpacing:2,
    color:"white",
  },
  text:{
    fontSize:80,
    marginLeft:125,
  }
  


});
