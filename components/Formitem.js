import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { commonStyles } from '../helper/helper'


export default function FormItem({label, children, theme}) {

  return (
    <View style={commonStyles.item}>
        <Text style={[commonStyles[theme + 'Text'], commonStyles.formItemText]}>{label}</Text>
        {children}
    </View>
  )
}

const styles = StyleSheet.create({})