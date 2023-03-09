//import { createStackNavigator } from "react-navigation-stack";
//import { createAppContainer } from "react-navigation";
import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Registration from '../screens/registration';
import Login from "../screens/login";
import Profile from '../screens/profile';
import { globalStyles } from '../styles/global';

const appStack = createStackNavigator();


export default function AppStackNavigator() {
    return (
        <NavigationContainer>
            <appStack.Navigator>
                <appStack.Screen
                    name="Registration"
                    component={Registration}
                    options={{
                        title: 'Registration',
                        headerTitleAlign: 'center',
                        headerTitleStyle: globalStyles.titleText,
                        headerTransparent: true,
                    }}
                />
                <appStack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        title: 'Login',
                        headerTitleAlign: 'center',
                        headerTitleStyle: globalStyles.titleText,
                        headerTransparent: true,
                    }}
                />
                <appStack.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        title: 'Profile',
                        headerTitleAlign: 'center',
                        headerTitleStyle: globalStyles.titleText,
                        headerTransparent: true,
                        //headerBackground: 'black'
                    }}
                />
            </appStack.Navigator>
        </NavigationContainer>
  
    )
}

//export default createAppContainer(registrationStack);