/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Text, TextInput, StyleSheet, SafeAreaView } from 'react-native';


const App = () => {

  const [email, onEmailChange] = React.useState("");
  const [password, onPasswordChange] = React.useState('')

  return (
    <SafeAreaView>
      <Text style={styles.loginText}>Login</Text>
      <TextInput
        value={email}
        onChangeText={onEmailChange}
        placeholder='Email'
        
        style={{
          borderWidth: 2,
          marginTop: '80%',
          marginHorizontal: 30,
          //position: 'absolute'
        }}
      />
      <TextInput
        value={password}
        onChangeText={onPasswordChange}
        placeholder='Password'
        secureTextEntry={true}
        
        style={{
          borderWidth: 2,
          marginTop: 30,
          marginHorizontal: 30,
        }}
      />
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  loginText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: "20%",
    color : 'blue',
  }
})



export default App;
