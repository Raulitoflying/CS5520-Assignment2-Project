<<<<<<< HEAD
import { StyleSheet, View } from 'react-native';
import React from 'react';
import { commonStyles } from '../helper/helper';
import ItemsList from '../Components/ItemsList';

export default function Diet({ theme, diet }) {
=======
import { StyleSheet, View } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../App';
import { commonStyles } from '../Helper/helper';
import ItemsList from '../Components/ItemsList';

export default function Diet() {
  // Use useContext to read the diet.
  const { theme, diet } = useContext(Context);

>>>>>>> 1d3df7abdaa7cea89f6780a9b026eefa66418eb1
  return (
    <View style={[commonStyles.topContainer, commonStyles[theme]]}>
      <ItemsList items={diet} />
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
