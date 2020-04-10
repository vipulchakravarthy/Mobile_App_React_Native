import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
// import ApiCalendar from 'react-google-calendar-api';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import * as firebase from 'firebase';
import {firebaseConfig} from './config';

import DashboardScreen from './screens/DashboardScreen';
import LoginScreen from './screens/LoginScreen';
import LoadingScreen from './screens/LoadingScreen';

firebase.initializeApp(firebaseConfig);

class App extends React.Component {

    render() {
      return (<AppNavigator />)
    }
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  DashboardScreen: DashboardScreen,
});

const AppNavigator = createAppContainer(AppSwitchNavigator);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;