import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddAnActivity from './Screens/AddAnActivity';
import AddADietEntry from './screens/AddADietEntry';
import Home from './Components/Home';
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
        <Stack.Screen name='Home'>
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
          {props => <AddAnActivity {...props} addAnActivity={addAnActivity} options={{ title: 'Add An Activity'}}/>}
        </Stack.Screen>
        <Stack.Screen name='AddADietEntry'>
          {props => <AddADietEntry {...props} addADietEntry={addADietEntry} options={{ title: 'Add A Diet Entry'}}/>}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});