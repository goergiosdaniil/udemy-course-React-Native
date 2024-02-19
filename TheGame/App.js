import { StyleSheet, ImageBackground, SafeAreaView, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";
import colors from "./constants/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameOver, setGameOver] = useState(true);

  function handleStartGame(selectedNumber) {
    setUserNumber(selectedNumber);
    setGameOver(false);
  }

  function handleGameOver() {
    setGameOver(true);
  }

  let content = <StartGameScreen onPickNumber={handleStartGame} />;

  if (userNumber) {
    content = (
      <GameScreen chosenNumber={userNumber} onGameOver={handleGameOver} />
    );
  }

  if (gameOver && userNumber) {
    content = (
      <GameOverScreen
        userNumber={userNumber}
        onRestart={() => {
          setUserNumber(null);
          setGameOver(false);
        }}
      />
    );
  }

  return (
    <LinearGradient
      colors={[colors.primary600, colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={{ opacity: 0.15 }}
        source={require("./assets/images/background.png")}
      >
        <SafeAreaView></SafeAreaView>
        {content}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
