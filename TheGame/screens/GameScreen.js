import React from 'react';
import { View, Text } from 'react-native';

function GameScreen({ chosenNumber }) {
  return (
    <View >
      <Text>This is the Game screen</Text>
      <Text>The chosen number is {chosenNumber}</Text>
    </View>
  );
}

export default GameScreen;