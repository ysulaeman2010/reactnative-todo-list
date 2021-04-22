import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals,setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="Add" onPress={addGoalHandler} />
      </View>
      <View>
        {courseGoals.map((goal) => <Text key={goal} style={styles.textList}>{goal}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    width: "80%",
    borderBottomColor: "black",
    borderWidth: 1,
  },
  textList:{
    padding: 10,
    marginTop: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth:1
  }
});
