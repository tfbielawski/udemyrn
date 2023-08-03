import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  //useState returns an array with 2 elements
  //1st element is the current state value, 2nd is a function to update the state
  const [enteredGoalText, setEnteredGoalText] = useState("");
  //State to hold the list of goals as an array
  const [courseGoals, setCourseGoals] = useState([]);

  //Function to handle input
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  //Function to handle button press
  function addGoalHandler() {
    console.log(enteredGoalText);
    //copies in coarseGoals and adds enteredGoalText to the end
    //passing in func to take current course goals add to the new current course goals
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      //key is needed for FlatList to work, apply random key
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
  }

  return (
    <View style={styles.appContainer}>
      {/* Styles are JS Objects. Preferrable to use a style component */}
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
      {/* map over course goals 
            pass in arrow fun, which gets the individual 
            course goals in the array of goals.
            Every call of this func receives the current goal.
            goal is output in a Text component 
            */}
      {/* This is needed for ScrollView, but not FlatList, which does it on its own
       {courseGoals.map((goal) => (
            <View key={goal} style={styles.goalItem}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))} */}
      <View style={styles.goalsContainer}>
        {/* Instead of mapping, renderItem passes in each item that needs to render */}
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItem}>
                {/*Must access text prop assigned above using .text  */}
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            );
          }}
          //Takes a function (gets item and index from Flatlist), returns a unique key
          keyExtractor={(item, index) => item.id}
          alwaysBounceVertical={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1, //takes the height of outer container
    padding: 50,
    paddingHorizontal: 16, //Left and right padding
  },
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
  goalsContainer: {
    flex: 5, //takes 5/6 of the space of inner container
  },
  goalItem: {
    margin: 8,
    borderRadius: 8,
    backgroundColor: "lightgrey",
    padding: 8,
  },
  goalText: {
    color: "red",
  },
});
