<<<<<<< HEAD
import React, { useState } from 'react';
import { Alert, StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native';
import { commonStyles } from '../helper/helper';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import FormItem from '../Components/FormItem';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function AddAnActivity({navigation, theme, addAnActivity}) {
  const [dropDownPickerOpen, setDropDownPickerOpen] = useState(false);
  const [isCalendarShow, setIsCalendarShow] = useState(false);
  const [activity, setActivity] = useState(null);
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState(new Date());

  const handlePressOut = () => {
=======
import { Alert, Button, StyleSheet, TextInput, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { commonStyles } from '../Helper/color'
import { Context } from '../App';
import DateTimePicker from '@react-native-community/datetimepicker';
import FormItem from './components/Formitem';

export default function AddADietEntry({navigation}) {
  const { theme, addADietEntry } = useContext(Context);
  const [isCalendarShow, setIsCalendarShow] = useState(false);
  const [description, setDescription] = useState();
  const [calories, setCalories] = useState();
  const [date, setDate] = useState();

  const handlePressOut = () => {
    if (!isCalendarShow && !date) {
      setDate(new Date());
    }
>>>>>>> 1d3df7abdaa7cea89f6780a9b026eefa66418eb1
    setIsCalendarShow(prev => !prev);
  }

  const handleCancel = () => {
    navigation.goBack();
  }

  const handleSave = () => {
<<<<<<< HEAD
    if (!activity || !date || !duration || isNaN(duration) || Number(duration) < 0) {
      Alert.alert('Invalid input', 'Please fill the fields correctly.');
      return;
    }
    addAnActivity({
      name: activity,
      value: `${Number(duration)} min`,
      date: date.toDateString(),
      isSpecial: Number(duration) > 60 && (activity === 'Running' || activity === 'Weights'),
=======
    // validate the inputs
    if (!description || !date || !calories || isNaN(calories) || Number(calories) < 0) {
      Alert.alert('Invalid input', 'Please fill the fields correctly.');
      return;
    }
    addADietEntry({
      name: description,
      value: Number(calories),
      date: date.toString().slice(0, 15),
      isSpecial: Number(calories) > 800,
>>>>>>> 1d3df7abdaa7cea89f6780a9b026eefa66418eb1
    });
    navigation.goBack();
  }

  return (
    <View style={[commonStyles.centerContainer, commonStyles[theme], commonStyles.content]}>
<<<<<<< HEAD
      <FormItem label='Activity *'>
        <View style={styles.inputContainer }>
          <Icon name="directions-run" size={24} color="#757575" style={styles.icon} />
          <DropDownPicker
            mode='modal'
            style={styles.dropdownStyle}
            containerStyle={styles.dropdownContainer}
            dropDownContainerStyle={styles.dropdownListContainer}
            placeholder='Select an activity'
            open={dropDownPickerOpen}
            value={activity}
            items={['Walking', 'Running', 'Swimming', 'Weights', 'Yoga', 'Cycling', 'Hiking'].map(item => ({
              label: item,
              value: item,
              labelStyle: styles.dropdownItemLabel
            }))}
            setOpen={setDropDownPickerOpen}
            setValue={setActivity}
            textStyle={styles.dropdownText}
          />
        </View>
      </FormItem>
      <FormItem label='Duration (min) *'>
        <View style={styles.inputContainer}>
          <Icon name="timer" size={24} color="#757575" style={styles.icon} />
          <TextInput
            style={styles.input}
            value={duration}
            placeholder="Enter duration"
            placeholderTextColor="#9e9e9e"
            keyboardType="numeric"
            onChangeText={setDuration}
            zIndex={999}
            zIndexInverse={999}
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
  dateText: {
    flex: 1,
    height: 48,
    fontSize: 16,
    color: '#212121',
    textAlignVertical: 'center',
  },
  dropdownStyle: {
    flex: 1,
    minHeight: 48,
    borderWidth: 0,
    backgroundColor: 'transparent',
  },
  dropdownContainer: {
    flex: 10,
  },
  dropdownListContainer: {
    borderColor: '#e0e0e0',
    backgroundColor: '#f5f5f5',
    zIndex: 5000
  },
  dropdownText: {
    fontSize: 16,
    color: '#212121',
  },
  dropdownItemLabel: {
    color: '#212121',

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
=======
      <FormItem label='Description *'>
        <TextInput
          style={[commonStyles.formItem, commonStyles.input, commonStyles.description]}
          value={description}
          multiline={true}
          onChangeText={newDescription => setDescription(newDescription)}
        />
      </FormItem>
      <FormItem label='Calories *'>
        <TextInput
          style={[commonStyles.formItem, commonStyles.input]}
          value={calories}
          onChangeText={newCalories => setCalories(newCalories)}
        />
      </FormItem>
      <FormItem label='Date *'>
        <TextInput
          style={[commonStyles.formItem, commonStyles.input]}
          value={date ? date.toString().slice(0, 15) : ''}
          inputMode='none'
          onPressOut={handlePressOut}
          onBlur={() => setIsCalendarShow(false)}
        />
        <View style={commonStyles.dateTimePicker}>
          {isCalendarShow && <DateTimePicker
            value={date || new Date()}
            onChange={(event, selectedDate) => {
              setIsCalendarShow(false);
              setDate(selectedDate);
            }}
            display="inline"
          />}
        </View>
      </FormItem>
      {!isCalendarShow && <View style={commonStyles.buttonGroup}>
        <Button title='Cancel' onPress={handleCancel} />
        <Button title='Save' onPress={handleSave} />
      </View>}
    </View>
  )
}

const styles = StyleSheet.create({})
>>>>>>> 1d3df7abdaa7cea89f6780a9b026eefa66418eb1
