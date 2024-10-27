import { 
  Alert, 
  Pressable, 
  StyleSheet, 
  Text, 
  TextInput, 
  View 
} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { commonStyles } from '../helper/helper'
import { Context } from '../helper/context'
import DropDownPicker from 'react-native-dropdown-picker'
import DateTimePicker from '@react-native-community/datetimepicker'
import FormItem from '../Components/FormItem'
import { deleteFromDB, updateInDB, writeToDB } from '../Firebase/firebaseHelper'
import Checkbox from 'expo-checkbox'
import PressableButton from '../Components/PressableButton'
import Ionicons from '@expo/vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/MaterialIcons'


export default function AddAnActivity({ navigation, route }) {
  // Context and state management
  const { theme } = useContext(Context)
  const [dropDownPickerOpen, setDropDownPickerOpen] = useState(false)
  const [isCalendarShow, setIsCalendarShow] = useState(false)
  const [activity, setActivity] = useState(route.params?.item.name)
  const [duration, setDuration] = useState(
    route.params?.item && Number(route.params.item.value.split(' ')[0]).toString()
  )
  const [date, setDate] = useState(route.params?.item ? new Date(route.params.item.date) : null)
  const [isApproved, setIsApproved] = useState(route.params?.item?.isApproved)

  // Constants
  const COLLECTION_NAME = 'activities'
  const DURATION_THRESHOLD = 60
  const SPECIAL_ACTIVITIES = ['Running', 'Weights']
  const ACTIVITY_OPTIONS = [
    'Walking',
    'Running',
    'Swimming',
    'Weights',
    'Yoga',
    'Cycling',
    'Hiking'
  ]

  
  useEffect(() => {
    if (route.params?.item) {
      navigation.setOptions({
        headerRight: () => (
          <Pressable
            android_ripple={{ color: 'white', radius: 20 }}
            style={({ pressed }) => [
              commonStyles.headerIcons,
              pressed && commonStyles.pressedStyle
            ]}
            onPress={handleDelete}
          >
            <Ionicons name="trash" size={24} color="white" />
          </Pressable>
        ),
      })
    }
  }, [])

  
  const handleDelete = () => {
    Alert.alert(
      "Delete",
      "Are you sure you want to delete this item?",
      [
        { text: "No" },
        {
          text: "Yes",
          onPress: () => {
            deleteFromDB(route.params?.item.id, COLLECTION_NAME)
            navigation.goBack()
          },
        },
      ]
    )
  }

  
  const handlePressOut = () => {
    if (!isCalendarShow && !date) {
      setDate(new Date())
    }
    setIsCalendarShow(prev => !prev)
  }

  
  const handleCancel = () => {
    navigation.goBack()
  }

  
  const handleSaveChanges = (data, id) => {
    updateInDB(data, id, COLLECTION_NAME)
    navigation.goBack()
  }

  
  const handleSave = () => {
    // Input validation
    if (!activity || !date || !duration || isNaN(duration) || Number(duration) < 0) {
      Alert.alert('Invalid input', 'Please fill the fields correctly.')
      return
    }

    // Prepare data object
    const data = {
      name: activity,
      value: `${Number(duration)} min`,
      date: date.getTime(),
      isSpecial: Number(duration) > DURATION_THRESHOLD && SPECIAL_ACTIVITIES.includes(activity),
    }

    // Add approval status for special items
    if (data.isSpecial) {
      data.isApproved = !!isApproved
    }

    // Handle update vs new entry
    if (route.params?.item) {
      Alert.alert(
        "Important",
        "Are you sure you want to save these changes?",
        [
          { text: "No" },
          {
            text: "Yes",
            onPress: () => handleSaveChanges(data, route.params?.item.id),
          },
        ]
      )
    } else {
      writeToDB(data, COLLECTION_NAME)
      navigation.goBack()
    }
  }

  return (
    <View style={[commonStyles.centerContainer, commonStyles[theme], commonStyles.content]}>
      {/* Activity Dropdown */}
      <View style={commonStyles.activity}>
        <FormItem label='Activity *'>
          <DropDownPicker
            style={commonStyles.formItem}
            placeholder='Select an activity'
            labelProps={{ style: commonStyles.lightText }}
            open={dropDownPickerOpen}
            value={activity}
            items={ACTIVITY_OPTIONS.map(item => ({
              label: item,
              value: item,
              labelStyle: commonStyles.lightText
            }))}
            setOpen={setDropDownPickerOpen}
            setValue={setActivity}
          />
        </FormItem>
      </View>

      {/* Duration Input */}
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

      {/* Date Picker */}
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
          {isCalendarShow && (
            <DateTimePicker
              value={date || new Date()}
              onChange={(event, selectedDate) => {
                setIsCalendarShow(false)
                setDate(selectedDate)
              }}
              display="inline"
            />
          )}
        </View>
      </FormItem>

      {/* Bottom Section - Approval Checkbox and Action Buttons */}
      {!isCalendarShow && (
        <View style={commonStyles.bottomGroup}>
          {route.params?.item.isSpecial && (
            <View style={commonStyles.checkbox}>
              <Text style={commonStyles.checkboxText}>
                This item is marked as special. Select the checkbox if you would like to approve it.
              </Text>
              <Checkbox value={isApproved} onValueChange={setIsApproved} />
            </View>
          )}
          <View style={commonStyles.buttonGroup}>
            <PressableButton 
              pressedFunction={handleCancel} 
              title="Cancel" 
              componentStyle={commonStyles.cancelButtonStyle} 
            />
            <PressableButton 
              pressedFunction={handleSave} 
              title="Save" 
            />
          </View>
        </View>
      )}
    </View>
  )
}

// Styles
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
})