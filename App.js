import React, { useState } from 'react';
import {
  StyleSheet, FlatList, View, Button
} from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/Goalnput';

export default function App() {

  const [courseGoals, setCurrentGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

  const addGoalHandler = goalTitle => {
    setCurrentGoals(currentGoals =>
      [...currentGoals, { id: Math.random().toString(), value: goalTitle }
      ])
    cancelGoalAdditionHandler()
  }

  const removeGoalHandler = (goalId) => {
    setCurrentGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput onAddGoal={addGoalHandler} visible={isAddMode} onCancel={cancelGoalAdditionHandler} />
      <FlatList keyExtractor={(item, index) => item.id} data={courseGoals} renderItem={itemData =>
        (<GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value} />
        )} />

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});
