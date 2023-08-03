import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StyleSheet, View, FlatList } from "react-native";

export default function App() {
  //State to hold the list of goals as an array
  const [courseGoals, setCourseGoals] = useState([]);

  //Function to handle button press
  function addGoalHandler(enteredGoalText) {
    //copies in coarseGoals and adds enteredGoalText to the end
    //passing in func to take current course goals  add to the new current course goals
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      //key is needed for FlatList to work, apply random key
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      {/* Styles are JS Objects. Preferrable to use a style component */}
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />;
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

  goalsContainer: {
    flex: 5, //takes 5/6 of the space of inner container
  },
});
