import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer} >
        <TextInput style={styles.textInput} placeholder="Your goal" />
        <Button title="ADD" />
      </View>
      <View style={styles.goalsContainer} >
        <Text>Goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 60,
    paddingHorizontal: 20,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  textInput: {
    width: "70%",
    borderColor: "black",
    borderWidth: 1,
    marginRight: 8,
    padding: 10,
  },
  goalsContainer: {
    flex: 5,
  },
});
