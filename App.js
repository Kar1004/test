
import React from 'react';
import { StyleSheet, Text, View, Image ,Pressable, ScrollView,Alert , ActivityIndicator} from 'react-native';



export default function App() {

  const ButtonAlert = () =>
  Alert.alert(
   "M'aimez vous ?",
  "Si vous dites noN,vous allez souffrir ?",
    [
      {
        text: "Oui",
        onPress: () => console.log("hELLO"),
       
      },
      { text: "Non", onPress:ButtonAlert }
    ]
  );


  return (
    <ScrollView style={styles.scroll}>
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.title1}>
           Text
        </Text>
        <Text style={styles.title2}>
          test2
          </Text>
            <Text style={styles.title3} >
          TEST3
          </Text>
      </View>
      <Image
  source={{ uri: "https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png" }}
  style={{ width: 240, height: 100 }} />
      <Image
  source={{ uri: "https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png" }}
  style={{ width: 240, height: 100 }} />

   <Pressable onPress={ButtonAlert}>
    <Text>HELLOooooooooOOOOOOOOOOO</Text>
     
   </Pressable>
   <ActivityIndicator size="large" color="#00ff00" />
   

    </View>
   
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: 'blue',
   
   
  },

  container2:{
    backgroundColor: 'white',

   

  },
  
  title1 : {  
    marginRight: 80 , 
    marginLeft : 80,
     fontSize:30,
  
  },

  title2 : {
    marginRight: 80 , 
    marginLeft : 80,
     fontSize:30,
    textAlign:'center',
  },

  title3 : {
    marginRight: 80 , 
    marginLeft : 80,
     fontSize:30,
     fontWeight:'bold'
   

  }
  

});  







