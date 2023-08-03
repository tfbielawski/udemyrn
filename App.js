
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
function goalInputHandler(enteredText) {  //Function to handle input

} 

function addGoalHandler() {  } //Function to handle button press

  return (
    <View style={styles.appContainer}>     
      {/* Styles are JS Objects. Preferrable to use a style component */}
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} 
        placeholder="Course Goal" 
        onChangeText={goalInputHandler} //Connects this to the function
        />  
        <Button title="ADD Goal" />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,              //takes the height of outer container
    padding: 50,
    paddingHorizontal: 16, //Left and right padding
  },
  inputContainer: {
    flex: 1,              //takes 1/6 of the space of inner container
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', //Aligns text on the button
    marginBottom : 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,     
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,             //takes 5/6 of the space of inner container
  }

});
