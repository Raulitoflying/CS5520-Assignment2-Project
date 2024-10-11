
import { StyleSheet, View } from 'react-native';
import React from 'react';
import { commonStyles } from '../helper/helper';
import ItemsList from '../Components/ItemsList';

export default function Activities({ theme, activities }) {

  return (
    <View style={[commonStyles.topContainer, commonStyles[theme]]}>
      <ItemsList items={activities} />
    </View>
  );
}

const styles = StyleSheet.create({});

