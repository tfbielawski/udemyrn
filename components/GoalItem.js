import { StyleSheet, View, Text } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      {/*Must access text prop assigned above using .text  */}
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
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
