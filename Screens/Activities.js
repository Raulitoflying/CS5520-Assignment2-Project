<<<<<<< HEAD
import { StyleSheet, View } from 'react-native';
import React from 'react';
import { commonStyles } from '../helper/helper';
import ItemsList from '../Components/ItemsList';

export default function Activities({ theme, activities }) {
=======
import { StyleSheet, View } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../App';
import { commonStyles } from '../Helper/helper';
import ItemsList from '../Components/ItemsList';

export default function Activities() {
  // Use useContext to read the activities.
  const { theme, activities } = useContext(Context);

>>>>>>> 1d3df7abdaa7cea89f6780a9b026eefa66418eb1
  return (
    <View style={[commonStyles.topContainer, commonStyles[theme]]}>
      <ItemsList items={activities} />
    </View>
<<<<<<< HEAD
  );
}

const styles = StyleSheet.create({});
=======
  )
}

const styles = StyleSheet.create({})
>>>>>>> 1d3df7abdaa7cea89f6780a9b026eefa66418eb1
