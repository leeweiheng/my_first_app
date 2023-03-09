
import React from 'react';
import { ImageBackground, Text, TextInput, StyleSheet, SafeAreaView, Button, Alert, ScrollView, TouchableOpacity, View } from 'react-native';
import { backgroundImage } from '../styles/global';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Registration extends React.Component {

    /* Constructor */
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            contactNumber: '',
            email: '',
            password: '',
            confirmPassword: '',
        };
    }

    //Name Handler
    nameHandler(input) {
        this.setState({ name: input })
    }

    //Contact Number Handler
    contactNumberHandler(input) {
        this.setState({ contactNumber: input })
    }

    // Email handler
    emailHandler(input) {
        this.setState({ email: input.trim().toLowerCase() });
    }

    //Password Handler
    passwordHandler(input) {
        this.setState({ password: input })
    }



    confirmPasswordHandler(input) {
        this.setState({ confirmPassword: input })
    }

    registerHandler(name, contactNumber, email, password, confirmPassword) {
        var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{3}$/;

        // To check if there is empty field
        if (email == '' || password == '' || confirmPassword == '' || name == '') {
            Alert.alert('Error', 'Mandatory fields are Name, Email, Password and Confirm Password.');
        } else if (!email.match(emailPattern)) {
            Alert.alert('Error', 'Invalid email!');
        } else if (password != confirmPassword) {
            Alert.alert('Error', 'Wrong Confirm Password!')
        } else if (!/^\d+$/.test(contactNumber)) {
            Alert.alert('Error', 'Invalid Contact Number!')
        } else {
            AsyncStorage.multiSet([['name', name], ['contactNumber', contactNumber], ['email', email], ['password', password]])
            this.props.navigation.push('Login')
        }
    }



    render() {
        return (
            <ImageBackground source={backgroundImage} style={{ flex: 1 }}>
                <SafeAreaView>
                    <ScrollView>
                        <TextInput
                            onChangeText={input => this.nameHandler(input)}
                            placeholder='Name*'
                            style={styles.firstInputField}
                        />
                        <TextInput
                            onChangeText={input => this.contactNumberHandler(input)}
                            placeholder='Contact Number'
                            keyboardType='number-pad'
                            maxLength={11}
                            style={styles.otherInputField}
                        />
                        <TextInput
                            onChangeText={input => this.emailHandler(input)}
                            placeholder='Email*'
                            style={styles.otherInputField}
                        />
                        <TextInput
                            onChangeText={input => this.passwordHandler(input)}
                            placeholder='Password*'
                            secureTextEntry={true}
                            style={styles.otherInputField}
                        />
                        <TextInput
                            onChangeText={input => this.confirmPasswordHandler(input)}
                            placeholder='Confirm Password*'
                            secureTextEntry={true}
                            style={styles.otherInputField}
                        />
                        <TouchableOpacity
                            onPress={() => {
                                this.registerHandler(this.state.name,
                                    this.state.contactNumber,
                                    this.state.email,
                                    this.state.password,
                                    this.state.confirmPassword)
                            }}
                            style={styles.button}>
                            <Text style={{fontSize:20, color:'black'}}> Register </Text>
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row', marginLeft: 'auto', marginRight: 'auto', marginTop: 10, }}>
                            <Text>
                                Have an account?
                            </Text>
                            <TouchableOpacity>
                                <Text
                                    onPress={() => this.props.navigation.navigate('Login')}
                                    style={{ color: '#6495ed', marginLeft: 10, textDecorationLine: 'underline' }}>
                                    Login
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </ScrollView>
                </SafeAreaView >
            </ImageBackground>
        );
    }

}


styles = StyleSheet.create({
    firstInputField: {
        borderWidth: 3,
        marginTop: '40%',
        marginHorizontal: 30,
        borderRadius: 10,
    },
    otherInputField: {
        borderWidth: 3,
        marginTop: 20,
        marginHorizontal: 30,
        borderRadius: 10,
    },
    button: {
        backgroundColor: '#6495ed',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: (50),
        width: (200),
        borderRadius: 10,
        marginTop: 20,

    }
})


