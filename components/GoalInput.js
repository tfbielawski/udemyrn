import {
  StyleSheet,
  View,
  TextInput,
  Modal,
  Button,
  Image,
} from "react-native";
import { useState } from "react";
import { endAsyncEvent } from "react-native/Libraries/Performance/Systrace";

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
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Course Goal"
          // () will execute the function immediately, without waiting for the event
          // No parenthesis will pass the function as a reference, to be executed when text changes
          onChangeText={goalInputHandler} //Connects this to the function
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="ADD GOAL" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="CANCEL" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1, //takes all available space in modal
    // flexDirection: "column", //default, not needed
    justifyContent: "center",
    alignItems: "center", //Aligns text on the button
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 8,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
});
