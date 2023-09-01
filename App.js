import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StyleSheet, View, FlatList, Button } from "react-native";

export default function App() {
  //State to hold the modal visibility
  const [modalIsVisible, setModalIsVisible] = useState(false);

  //State to hold the list of goals as an array
  const [courseGoals, setCourseGoals] = useState([]);

  //Function to handle button press
  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  //Function to handle button press
  function addGoalHandler(enteredGoalText) {
    //copies in coarseGoals and adds enteredGoalText to the end
    //passing in func to take current course goals  add to the new current course goals
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      //key is needed for FlatList to work, apply random key
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    // endAddGoalHandler();
    setModalIsVisible(false);
  }

  function deleteGoalHandler(id) {
    //console.log("DELETE -->>" + goalId);
    setCourseGoals((currentCourseGoals) => {
      //currentCourseGoals is an array
      //filter returns a new array, minus items filtered out
      //filter takes a function, which takes an item and returns true (kept) or false (dropped)
      //if the id of the item is not equal to the id passed in, keep it
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      {/* Styles are JS Objects. Preferrable to use a style component */}
      <Button
        title="Add New Goal"
        color="darkslateblue"
        onPress={startAddGoalHandler}
      />
      {modalIsVisible && <GoalInput
        visble={modalIsVisible}
        onAddGoal={addGoalHandler}
        onCancel={endAddGoalHandler}
      />}
      {/* <GoalInput
        visble={modalIsVisible}
        onAddGoal={addGoalHandler}
        onCancel={endAddGoalHandler}
      /> */}

      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
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

  goalsContainer: {
    flex: 5, //takes 5/6 of the space of inner container
  },
});
