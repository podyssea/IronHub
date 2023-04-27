import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/HomeScreen';
import WorkoutPlansScreen from './src/WorkoutPlansScreen';
import DailyRoutine from './src/DailyRoutine';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="WorkoutPlans" component={WorkoutPlansScreen} />
        <Stack.Screen name="DailyRoutine" component={DailyRoutine} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
