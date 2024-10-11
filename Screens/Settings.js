<<<<<<< HEAD
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { commonStyles } from '../helper/helper';

export default function Settings({ theme, toggleTheme }) {
  return (
    <View style={[commonStyles.topContainer, commonStyles[theme]]}>
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
}

const styles = StyleSheet.create({});
=======
import { Button, StyleSheet, View } from 'react-native'
import React, { useContext } from 'react'
import { colors, commonStyles } from '../Helper/helper'
import { Context } from '../App';

export default function Settings() {
  // Use React Context to communicate theme change to all the components.
  const { theme, toggleTheme } = useContext(Context);

  return (
    <View style={[commonStyles.centerContainer, commonStyles[theme]]}>
      <Button
        title='Toggle Theme'
        onPress={toggleTheme}
        color={theme === 'light' ? colors.bluishViolet : colors.light}
      />
    </View>
  )
}

const styles = StyleSheet.create({})
>>>>>>> 1d3df7abdaa7cea89f6780a9b026eefa66418eb1
