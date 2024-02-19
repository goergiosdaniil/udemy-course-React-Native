import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const GoalItem = (props) => {
  return (
    <Pressable onPress={props.onDeteleItem.bind(this, props.id)}>
      <View style={styles.goalItem}>
        <Text>{props.title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default GoalItem;
