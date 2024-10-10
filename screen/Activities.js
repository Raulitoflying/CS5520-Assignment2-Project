import { StyleSheet, View } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../helper/context'
import { commonStyles } from '../helper/helper';
import ItemsList from '../Components/ItemsList';

export default function Activities() {
  // Use useContext to read the activities.
  const { theme, activities } = useContext(Context);

  return (
    <View style={[commonStyles.topContainer, commonStyles[theme]]}>
      <ItemsList items={activities} />
    </View>
  )
}

const styles = StyleSheet.create({})