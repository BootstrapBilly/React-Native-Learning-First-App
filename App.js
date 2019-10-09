import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, } from 'react-native';
import GoalItem from "./components/GoalItem"
import GoalInput from "./components/GoalInput"

export default function App() {

  //first element is the goal -> retrieved from the textinput
  //second element is a function used to set goal somewhere

  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = enteredGoal => {//Entered goal is the value passed when the onButtonPress prop is called

    setCourseGoals(currentGoals => [//Set the array (takes in the current array)
      ...currentGoals, //To the current array
      {key: Math.random().toString(), value: enteredGoal}//Plus a new object containing a randomly generated key and the value of the entered goal from the TextInput
    ]) //set course goals to whatever is currently in the array, plus the new course goal

  }

  const deleteGoalHandler = () => {//Entered goal is the value passed when the onButtonPress prop is called

    // setCourseGoals(currentGoals => [...currentGoals].pop())

    console.log(courseGoals)
  }

  //first element is the output/new text, second element is the function that changes the text
  //Parameter of useState is the starting text

  return (

    <View style={styles.screen}> 

      <GoalInput onAddButtonPress={addGoalHandler}/>

      <FlatList data={courseGoals} renderItem={goal => <GoalItem value={goal.item.value} onDelete={deleteGoalHandler}/>}/>


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

    },


});
