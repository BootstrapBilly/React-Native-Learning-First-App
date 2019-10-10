import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, Modal } from 'react-native';



const GoalInput = props => { 

//parameter of the useState() function is the initial value of the //?
const [enteredGoal, setEnteredGoal] = useState("");

//define a function which handles the user input of the goal textInput
//it takes a parameter of enteredText which is the user input passed in automatically by react via the onTextChange event listener
const goalInputHandler = (enteredText) => {

//call the function in the state and pass the entered text to it
setEnteredGoal(enteredText);

}

    return (

      <Modal visible={props.checkVisibility} animationType="slide">

        <View style={styles.firstView}>

          <TextInput 

          placeholder="Add goal" 
          style={styles.firstView_textInput} 
          onChangeText={goalInputHandler}
          value={enteredGoal}
          />

          <View style={styles.buttons}>

            <View style={styles.button}><Button title="CANCEL" onPress={props.onCancelButtonPress} color={"red"}/></View>
            <View style={styles.button}><Button title="ADD" onPress={props.onAddButtonPress.bind(this, enteredGoal, setEnteredGoal)}/></View>
            
            

          </View>

        </View>

      </Modal>

    ) 
}

const styles = StyleSheet.create({

    firstView: {

      justifyContent: "space-between", 
      alignItems: "center",
      justifyContent: "center",
      flex:1,

    },

    firstView_textInput: {

      width: "80%", 
      borderColor: "black", 
      borderWidth: 1, 
      padding:10,
      marginBottom: 10

    },

    buttons : {

      flexDirection: "row",
      justifyContent: "space-between",
      width: "60%"
  
    },

    button : {

      width:"40%"

    }


});

export default GoalInput