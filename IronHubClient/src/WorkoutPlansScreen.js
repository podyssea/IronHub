import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Styles from './Styles';


export default function WorkoutPlansScreen({ navigation }) {
  const workoutPlans = ['Plan A', 'Plan B', 'Plan C']; // Replace this with an array of your workout plans
  
  return (
    <View style={Styles.container}>
      {workoutPlans.map((plan, index) => (
        <TouchableOpacity
          style={Styles.button}
          key={index}
          onPress={() => navigation.navigate('DailyRoutine', { plan })}
        >
          <Text style={Styles.buttonText}>{plan}</Text>
  </TouchableOpacity>
      ))}
</View>
  );
}

