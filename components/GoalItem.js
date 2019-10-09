import React, {useState} from 'react';

import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, TouchableOpacity } from 'react-native';

import { Icon } from 'react-native-elements'

const GoalItem = props => {

    //The props is whatever is passed into the component
    //props.value must be set whenever the component is called by setting the value attribute
    return (

        

            <View style={styles.goalList}>

                <Text>{props.value}</Text>

                <TouchableOpacity onPress={props.onDelete} style={styles.listIcon}>

                    <Icon name="delete"/>

                </TouchableOpacity>
                

            </View>

    )

}

const styles = StyleSheet.create({

    goalList : {

        flexDirection: "row",
        marginVertical: 10,
        marginTop: 20,
        backgroundColor: "#ccc",
        borderColor: "black",
        borderWidth: 1,
        flex: 1,
        justifyContent:"space-between",
        alignItems: "center",
  
      },

      listIcon : {

        marginRight:10

      }
       
})

export default GoalItem;