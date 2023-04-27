import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Styles from './Styles';

export default function DailyRoutine({ navigation, route }) {
  const [exercises, setExercises] = useState([
    { exercise: 'Bench Press', sets: '', weights: '' },
    { exercise: 'Squats', sets: '', weights: '' },
    { exercise: 'Deadlifts', sets: '', weights: '' },
  ]);

  const [selectedDay, setSelectedDay] = useState(0);

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const handleSetExercise = (text, index, field) => {
    const newExercises = [...exercises];
    newExercises[index][field] = text;
    setExercises(newExercises);
  };

  const handleSave = () => {
    // Save the exercises to the database or do something else with them
    navigation.goBack();
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.row}>
        {daysOfWeek.map((day, index) => (
          <TouchableOpacity
            style={[Styles.button, selectedDay === index && Styles.selectedDayButton]}
            key={index}
            onPress={() => setSelectedDay(index)}
          >
            <Text style={[Styles.buttonText, selectedDay === index && Styles.selectedDayText]}>{day}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView horizontal={true}>
        <View style={{ flexDirection: 'row' }}>
          {exercises.map((exercise, index) => (
            <View key={index} style={Styles.column}>
              <Text style={Styles.rowText}>{exercise.exercise}</Text>
              <View style={Styles.row}>
                <TextInput
                  style={Styles.input}
                  placeholder="Sets"
                  keyboardType="numeric"
                  onChangeText={(text) => handleSetExercise(text, index, 'sets')}
                  value={exercise.sets}
                />
                <TextInput
                  style={Styles.input}
                  placeholder="Weights"
                  keyboardType="numeric"
                  onChangeText={(text) => handleSetExercise(text, index, 'weights')}
                  value={exercise.weights}
                />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <TouchableOpacity style={Styles.button} onPress={handleSave}>
        <Text style={Styles.buttonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}
