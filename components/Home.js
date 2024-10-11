import { Button, StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Activities from '../Screens/Activities';
import Diet from '../Screens/Diet';
import Settings from '../Screens/Settings';
import { colors, commonStyles } from '../helper/helper';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

export default function Home({ navigation, theme, activities, diet, toggleTheme, addAnActivity, addADietEntry }) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: commonStyles.navigatorBackground,
        headerTintColor: colors.white,
        tabBarStyle: commonStyles.navigatorBackground,
        tabBarActiveTintColor: colors.yellow,
      }}
    >
      <Tab.Screen
        name="Activities"
        options={{
          tabBarIcon: ({ color, size }) => <MaterialIcons name="directions-run" size={size} color={color} />,
          headerRight: () => <Button title='Add' onPress={() => navigation.navigate('AddAnActivity')} />,
        }}
      >
        {props => <Activities {...props} theme={theme} activities={activities} />}
      </Tab.Screen>
      <Tab.Screen
        name="Diet"
        options={{
          tabBarIcon: ({ color, size }) => <MaterialIcons name="fastfood" size={size} color={color} />,
          headerRight: () => <Button title='Add' onPress={() => navigation.navigate('AddADietEntry')} />,
        }}
      >
        {props => <Diet {...props} theme={theme} diet={diet} />}
      </Tab.Screen>
      <Tab.Screen
        name="Settings"
        options={{ tabBarIcon: ({ color, size }) => <MaterialIcons name="settings" size={size} color={color} /> }}
      >
        {props => <Settings {...props} theme={theme} toggleTheme={toggleTheme} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});