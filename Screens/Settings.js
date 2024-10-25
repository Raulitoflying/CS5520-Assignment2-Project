import { StyleSheet, View } from 'react-native'
import React from 'react'
import { commonStyles } from '../helper/helper'
import PressableButton from '../Components/PressableButton';

export default function Settings(theme, toggleTheme) {
  // Use React Context to communicate theme change to all the components.

  return (
    <View style={[commonStyles.centerContainer, commonStyles[theme]]}>
      <PressableButton
        pressedFunction={toggleTheme}
        title='Toggle Theme'
        componentStyle={commonStyles.lightText}
      />
    </View>
  )
}

const styles = StyleSheet.create({})