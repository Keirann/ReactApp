import Expo from 'expo';
import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import RootNavigator from './RootComponent';




class App extends React.Component {

  render() {
    return (  
        <RootNavigator/>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 40,
  },
});

Expo.registerRootComponent(App);
