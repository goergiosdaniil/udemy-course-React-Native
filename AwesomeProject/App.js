import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalInput from "./components/goalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function cancelGoalAdditionHandler() {
    setModalIsVisible(false);
  }

  function deleteGoalHandler(goalId) {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== goalId);
    });
  }
  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color={"purple"}
        onPress={startAddGoalHandler}
      />
       <GoalInput
        visible={modalIsVisible}
        onAddGoal={(goalTitle) => {
          setCourseGoals((currentGoals) => [
            ...currentGoals,
            { key: Math.random().toString(), text: goalTitle },

          ]);
          cancelGoalAdditionHandler();
        }}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          renderItem={(itemData) => {
            return (
              <GoalItem
                title={itemData.item.text}
                id={itemData.item.key}
                onDeteleItem={deleteGoalHandler}
              />
            );
          }}
          data={courseGoals}
        />
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
  goalsContainer: {
    flex: 5,
  },
});
