import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MealsNavigator from './navigation/MealsNavigator';

// import { createStackNavigator } from 'react-navigation-stack';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createDrawerNavigator } from 'react-navigation-drawer';


// import * as Font from 'expo-font'
// import {AppLoading} from 'expo';

// const fetchFonts = () => {
//   Font.loadAsync({
//     'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
//     'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
//   })
// }

export default function App() {

  return (
    <MealsNavigator/>
  );
}

const styles = StyleSheet.create({
  
});