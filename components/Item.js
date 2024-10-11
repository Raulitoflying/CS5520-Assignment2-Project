import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '../Helper/color';
import { Context } from '../App';

export default function Item({item: {name, value, date, isSpecial}}) {
  return (
    <View style={commonStyles.itemContainer}>
      <Text style={[commonStyles.itemText, commonStyles.itemLeft]}>{name}</Text>
      <View style={commonStyles.itemRight}>
        {isSpecial && <Ionicons name="warning" size={24} color={colors.yellow} />}
        <View style={commonStyles.textContainer}>
            <Text style={commonStyles.itemText}>{date}</Text>
        </View>
        <View style={commonStyles.textContainer}>
            <Text style={commonStyles.itemText}>{value}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})