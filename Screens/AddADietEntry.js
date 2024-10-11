
import { Alert, Button, StyleSheet, TextInput, TouchableOpacity, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { commonStyles } from '../helper/helper'
import DateTimePicker from '@react-native-community/datetimepicker';
import FormItem from '../Components/FormItem';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function AddADietEntry({navigation, theme, addADietEntry}) {
  const [isCalendarShow, setIsCalendarShow] = useState(false);
  const [description, setDescription] = useState('');
  const [calories, setCalories] = useState('');
  const [date, setDate] = useState(new Date());

  const handlePressOut = () => {

    setIsCalendarShow(prev => !prev);
  }

  const handleCancel = () => {
    navigation.goBack();
  }

  const handleSave = () => {

    if (!description || !date || !calories || isNaN(calories) || Number(calories) < 0) {
      Alert.alert('Invalid input', 'Please fill the fields correctly.');
      return;
    }
    addADietEntry({
      name: description,
      value: Number(calories),
      date: date.toString().slice(0, 15),
      isSpecial: Number(calories) > 800,
    });
    navigation.goBack();
  }

  return (
    <View style={[commonStyles.centerContainer, commonStyles[theme], commonStyles.content]}>
      <FormItem label='Description *'>
        <View style={styles.inputContainer}>
          <Icon name="description" size={24} color="#757575" style={styles.icon} />
          <TextInput
            style={[styles.input, styles.descriptionInput]}
            value={description}
            multiline={true}
            placeholder="Enter description"
            placeholderTextColor="#9e9e9e"
            onChangeText={setDescription}
          />
        </View>
      </FormItem>
      <FormItem label='Calories *'>
        <View style={styles.inputContainer}>
          <Icon name="local-fire-department" size={24} color="#757575" style={styles.icon} />
          <TextInput
            style={styles.input}
            value={calories}
            placeholder="Enter calories"
            placeholderTextColor="#9e9e9e"
            keyboardType="numeric"
            onChangeText={setCalories}
          />
        </View>
      </FormItem>
      <FormItem label='Date *'>
        <TouchableOpacity onPress={handlePressOut} style={styles.inputContainer}>
          <Icon name="event" size={24} color="#757575" style={styles.icon} />
          <Text style={styles.dateText}>
            {date.toDateString()}
          </Text>
        </TouchableOpacity>
        {isCalendarShow && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => {
              setIsCalendarShow(false);
              if (selectedDate) setDate(selectedDate);
            }}
          />
        )}
      </FormItem>
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={handleCancel}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={handleSave}>
          <Text style={[styles.buttonText, styles.saveButtonText]}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    backgroundColor: '#f5f5f5',
  },
  icon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 16,
    color: '#212121',
  },
  descriptionInput: {
    height: 80,
    textAlignVertical: 'top',
    paddingTop: 12,
  },
  dateText: {
    flex: 1,
    height: 48,
    fontSize: 16,
    color: '#212121',
    textAlignVertical: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  button: {
    flex: 1,
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  cancelButton: {
    backgroundColor: '#e0e0e0',
  },
  saveButton: {
    backgroundColor: '#2196F3',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  saveButtonText: {
    color: '#ffffff',
  },
});
