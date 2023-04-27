import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Styles from './Styles';

export default function HomeScreen({ navigation }) {
  const handlePress = () => {
    navigation.navigate('WorkoutPlans');
  };

  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>IonHUB</Text>
      <Text style={Styles.subtitle}>Welcome</Text>
      <View style={Styles.buttonContainer}>
        <TouchableOpacity style={Styles.button} onPress={handlePress}>
          <Text style={Styles.buttonText}>START</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

