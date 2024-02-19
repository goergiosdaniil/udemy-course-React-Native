import React from 'react';
import { View, Text } from 'react-native';
import PrimaryButton from '../components/UI/PrimaryButton';

function GameOverScreen({ userNumber, onRestart}) {
  return (
    <View>
      <Text>This is the GameOverScreen</Text>
      <PrimaryButton onPress={onRestart}>Restart</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;