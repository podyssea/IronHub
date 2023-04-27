import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Styles from './Styles';
import { Picker } from '@react-native-picker/picker';
import  SelectDropdown from 'react-native-select-dropdown';
import { DataTable } from 'react-native-paper';

export default function DailyRoutine({ navigation, route }) {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const [selectedDay, setSelectedDay] = useState(0);


  const handleSave = () => {
    // Save the exercises to the database or do something else with them
    navigation.goBack();
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
        <SelectDropdown
            data={daysOfWeek}
            onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
            }}
            rowTextForSelection={(item, index) => {
                return item
        }}/>
        <View style={Styles.containerTable}>
            <DataTable>
                <DataTable.Header>
                <DataTable.Title>Name</DataTable.Title>
                <DataTable.Title>Email</DataTable.Title>
                <DataTable.Title numeric>Age</DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                <DataTable.Cell>John</DataTable.Cell>
                <DataTable.Cell>john@kindacode.com</DataTable.Cell>
                <DataTable.Cell numeric>33</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                <DataTable.Cell>Bob</DataTable.Cell>
                <DataTable.Cell>test@test.com</DataTable.Cell>
                <DataTable.Cell numeric>105</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                <DataTable.Cell>Mei</DataTable.Cell>
                <DataTable.Cell>mei@kindacode.com</DataTable.Cell>
                <DataTable.Cell numeric>23</DataTable.Cell>
                </DataTable.Row>

            </DataTable>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    containerTable: {
      paddingTop: 100,
      paddingHorizontal: 30,
    },
  });
