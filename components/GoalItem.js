import React, {useState} from 'react';

import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, TouchableOpacity } from 'react-native';

const GoalItem = props => {

    //The props is whatever is passed into the component
    //props.value must be set whenever the component is called by setting the value attribute
    return (

        <TouchableOpacity onPress={props.onDelete}>

            <View style={styles.goalList}>

            <Text>{props.value}</Text>

            </View>
            
        </TouchableOpacity>

    )

}

const styles = StyleSheet.create({

    goalList : {

        marginVertical: 10,
        marginTop: 20,
        backgroundColor: "#ccc",
        borderColor: "black",
        borderWidth: 1
  
      },
       
})

export default GoalItem;