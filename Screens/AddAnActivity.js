import React, { useState } from 'react';
import { Alert, StyleSheet, TextInput, View, Button } from 'react-native';
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
  const [date, setDate] = useState('');

  const handlePressOut = () => {
    setIsCalendarShow(prev => !prev);
  }

  const handleCancel = () => {
    navigation.goBack();
  }

  const handleSave = () => {
    if (!activity || !date || !duration || isNaN(duration) || Number(duration) < 0) {
      Alert.alert('Invalid input', 'Please fill the fields correctly.');
      return;
    }
    addAnActivity({
      name: activity,
      value: `${Number(duration)} min`,
      date: date.toString().slice(0, 15),
      isSpecial: Number(duration) > 60 && (activity === 'Running' || activity === 'Weights'),
    });
    navigation.goBack();
  }

  return (
    <View style={[commonStyles.centerContainer, commonStyles[theme], commonStyles.content]}>
      <View style={commonStyles.activity}>
        <FormItem label='Activity *'>
          <DropDownPicker
            style={commonStyles.formItem}
            placeholder='Select an activity'
            labelProps={{style: commonStyles.lightText}}
            open={dropDownPickerOpen}
            value={activity}
            items={['Walking', 'Running', 'Swimming', 'Weights', 'Yoga', 'Cycling', 'Hiking'].map(item =>
              ({label: item, value: item, labelStyle: commonStyles.lightText})
            )}
            setOpen={setDropDownPickerOpen}
            setValue={setActivity}
          />
        </FormItem>
      </View>
        <FormItem label='Duration (min) *'>
          <View style={[styles.inputContainer, { zIndex: 1 }]}>
            <Icon name="timer" size={24} color="#757575" style={styles.icon} />
            <TextInput
              style={styles.input}
              value={duration}
              placeholder="Enter duration"
              placeholderTextColor="#9e9e9e"
              keyboardType="numeric"
              onChangeText={setDuration}
            />
          </View>
          </FormItem>
      <FormItem label='Date *'>
        <TextInput
          style={[commonStyles.formItem, commonStyles.input]}
          value={date ? date.toString().slice(0, 15) : ''}
          placeholder="Select a date"
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
    zIndex: 999,
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
    flex: 1,
  },
  dropdownListContainer: {
    borderColor: '#e0e0e0',
    backgroundColor: '#f5f5f5',
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