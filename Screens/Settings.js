import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { commonStyles } from '../helper/helper';

export default function Settings({ theme, toggleTheme }) {
  return (
    <View style={[commonStyles.centerContainer, commonStyles[theme]]}>
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
}

const styles = StyleSheet.create({});