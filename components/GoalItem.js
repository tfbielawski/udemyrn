import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    // bind is a js function that preconfigures the function to be called

    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "red" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        // If button is pressed, apply the pressedItem style, else apply nothing
        //ripple doesn't work on ios, use style prop instead
        style={({ pressed }) => pressed && styles.pressedItem}
        >
        {/*Must access text prop assigned above using .text  */}
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 8,
    backgroundColor: "lightgrey",
  },
  pressedItem:{
    opacity: 0.5,
  },
  goalText: {
    padding: 8,
    color: "red",
  },
});
