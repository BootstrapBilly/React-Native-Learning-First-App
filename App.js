import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  //first element is the output/new text, second element is the function that changes the text
  //Parameter of useState is the starting text

  return (

    <View style={styles.screen}> 

      <View style={styles.firstView}>
        
        <TextInput placeholder="Course goal" style={styles.firstView_textInput}/>

        <Button title="ADD" />

      </View>

      <View>

      </View>

    </View>
    
  );
}

const styles = StyleSheet.create({

    screen:{

      padding:50
      
    },

    firstView: {

      flexDirection: "row", 
      justifyContent: "space-between", 
      alignItems: "center"

    },

    firstView_textInput: {

      width: "80%", 
      borderColor: "black", 
      borderWidth: 1, 
      padding:10

    }
     
});
