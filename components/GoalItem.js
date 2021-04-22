import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = (props) => {

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete.bind(this,props.id)}>
      <View style={(props.status === true) ? styles.textList : styles.textListWarning}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textList: {
    padding: 10,
    marginTop: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
  textListWarning: {
    padding: 10,
    marginTop: 10,
    backgroundColor: "salmon",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default GoalItem;
