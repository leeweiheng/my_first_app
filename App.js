/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Text, TextInput, StyleSheet, SafeAreaView } from 'react-native';
import Navigator from './routes/appStack'

const App = () => {

  return (
    <Navigator/>
  );

}

export default App;
