import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from "react";

function GoalInput(props) {
  //useState returns an array with 2 elements
  //1st element is the current state value, 2nd is a function to update the state
  const [enteredGoalText, setEnteredGoalText] = useState("");

  //Function to handle input
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText(""); //clears the box whenever we add a new goal
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Course Goal"
        // () will execute the function immediately, without waiting for the event
        // No parenthesis will pass the function as a reference, to be executed when text changes
        onChangeText={goalInputHandler} //Connects this to the function
      />
      <Button title="ADD Goal" onPress={addGoalHandler} />
    </View>
  );
} 

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1, //takes 1/6 of the space of inner container
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center", //Aligns text on the button
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
