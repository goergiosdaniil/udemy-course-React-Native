import { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Title from "../components/UI/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/UI/PrimaryButton";

function generateRandomBetween(min, max, exclude) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let min = 1;
let max = 100;

function GameScreen({ chosenNumber, onGameOver }) {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, chosenNumber)
  );

  useEffect(() => {
    if (currentGuess === chosenNumber) {
      onGameOver();
    }
  }, [currentGuess, chosenNumber, onGameOver]);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < chosenNumber) ||
      (direction === "greater" && currentGuess > chosenNumber)
    ) {
      alert("Don't lie!");
      return;
    }
    if (direction === "lower") {
      max = currentGuess;
    } else {
      min = currentGuess + 1;
    }
    console.log(min, max);
    const nextNumber = generateRandomBetween(min, max, currentGuess);
    setCurrentGuess(nextNumber);
  }
  return (
    <View style={styles.rootScreen}>
      <Title>Opponent`s Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View style={styles.buttons}>
        <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
          -
        </PrimaryButton>
        <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
          +
        </PrimaryButton>
      </View>
      <Title>Chosen Number: {chosenNumber}</Title>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    padding: 24,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
