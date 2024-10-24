import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddAnActivity from './Screens/AddAnActivity';
import AddADietEntry from './Screens/AddADietEntry'; 
import Home from './Components/Home'; 
import { colors, commonStyles } from './helper/helper';
import React, { useState } from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
  const [theme, setTheme] = useState('light');
  const [activities, setActivities] = useState([]);
  const [diet, setDiet] = useState([]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const addAnActivity = (newActivity) => {
    setActivities(prevActivity => [...prevActivity, newActivity]);
  };

  const addADietEntry = (newDietEntry) => {
    setDiet(prevDietEntry => [...prevDietEntry, newDietEntry]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: commonStyles.navigatorBackground, headerTintColor: colors.white }}>
        <Stack.Screen name='Home' options={{ headerShown: false }}>
          {props => (
            <Home
              {...props}
              theme={theme}
              activities={activities}
              diet={diet}
              toggleTheme={toggleTheme}
              addAnActivity={addAnActivity}
              addADietEntry={addADietEntry}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name='AddAnActivity'>
          {props => <AddAnActivity {...props} theme={theme} addAnActivity={addAnActivity} />}
        </Stack.Screen>
        <Stack.Screen name='AddADietEntry'>
          {props => <AddADietEntry {...props} theme={theme} addADietEntry={addADietEntry} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});