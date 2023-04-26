import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Styles from './Styles';
import WorkoutPlansScreen from './WorkoutPlansScreen';

export default function HomeScreen({ navigation }) {
  const handlePress = () => {
    navigation.navigate('WorkoutPlans');
  };

  return (
    <View style={Styles.container}>
    <TouchableOpacity
        style={Styles.button}
        onPress={() => navigation.navigate('WorkoutPlans')}
    >
        <Text style={Styles.buttonText}>Get Started</Text>
    </TouchableOpacity>
    </View>

  );
}
