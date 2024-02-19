import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/UI/PrimaryButton";
import colors from "../constants/colors";
import Title from "../components/UI/Title";
function StartGameScreen({ onPickNumber }) {
  const [enteredValue, setEnteredValue] = useState("");

  function handleNumberInput(text) {
    setEnteredValue(text.replace(/[^0-9]/g, ""));
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number",
        " Please enter a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: handleReset }]
      );
      return;
    }
    onPickNumber(chosenNumber);
    setEnteredValue("");
  }

  function handleReset() {
    setEnteredValue("");
  }

  return (
    <View>
      <Title>Start a New Game</Title>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={handleNumberInput}
          value={enteredValue}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handleReset}> Reset </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>
              {" "}
              Confirm{" "}
            </PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 16,
    backgroundColor: colors.primary800,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
  },
  numberInput: {
    height: 50,
    width: 50,
    textAlign: "center",
    fontSize: 32,
    borderBottomColor: colors.accent500,
    borderBottomWidth: 2,
    marginVertical: 10,
    color: colors.accent500,
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
  buttonContainer: {
    flex: 1,
  },
});
