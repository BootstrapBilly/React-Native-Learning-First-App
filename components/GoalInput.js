import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';



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

        <View style={styles.firstView}>

            <TextInput 

            placeholder="Course goal" 
            style={styles.firstView_textInput} 
            onChangeText={goalInputHandler}
            value={enteredGoal}
            />

            <Button title="ADD" onPress={props.onAddButtonPress.bind(this, enteredGoal)}/>

        </View>
    ) 
}

const styles = StyleSheet.create({

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

    },

});

export default GoalInput