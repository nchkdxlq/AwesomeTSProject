import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import DetailPage from './DetailPage';
import HomePage from './HomePage';

const AppRoot = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  name='Home' component={HomePage} options={{ title: 'Welcome' }} />
        <Stack.Screen name='Detail' component={DetailPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppRoot;