import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { MenuProvider } from './context/MenuContext';
import HomeScreen from './screens/HomeScreen';
import ManageMenuScreen from './screens/ManageMenuScreen';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

// Matches Figure 4's navigation flow from Part 1: Home <-> Manage Menu,
// with the menu array shared between both screens via MenuProvider.
export default function App() {
  return (
    <MenuProvider>
      <NavigationContainer>
        <StatusBar style="dark" />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="ManageMenu" component={ManageMenuScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </MenuProvider>
  );
}
