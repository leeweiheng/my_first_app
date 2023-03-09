

import React from 'react';
import { ImageBackground, Text, TextInput, StyleSheet, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { backgroundImage } from '../styles/global';


export default class Login extends React.Component {

    /* Constructor */
    constructor(props) {
        super(props);
        this.state = {
            validEmail: '',
            validPassword: '',
            email: '',
            password: '',


        };
    }

    // Email handler
    emailHandler(input) {
        this.setState({ email: input.trim().toLowerCase() });
    }

    //Password Handler
    passwordHandler(input) {
        this.setState({ password: input })
    }

    componentDidMount() {
        AsyncStorage.multiGet(['email', 'password']).then(value => {
            this.setState({ validEmail: value[0][1] });
            this.setState({ validPassword: value[1][1] });
        })
    }

    loginHandler(email, password) {
        var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{3}$/;

        if (email == '' || password == '') {
            Alert.alert('Error', 'Please enter your Email and Password!')
        } else if (!email.match(emailPattern)) {
            Alert.alert('Error', 'Invalid email!');
        } else if (email == this.state.validEmail && password == this.state.validPassword) {
            this.props.navigation.reset({
                index: 0,
                routes: [{ name: 'Profile' }]
            })
        } else {
            Alert.alert('Error', 'Invalid email and/or password!')
        }
    }

    render() {
        return (
            <ImageBackground source={backgroundImage} style={{ flex: 1 }}>
                <SafeAreaView>
                    <TextInput
                        onChangeText={input => this.emailHandler(input)}
                        placeholder='Email'

                        style={{
                            borderWidth: 3,
                            marginTop: '70%',
                            marginHorizontal: 30,
                            borderRadius: 10,
                        }}
                    />
                    <TextInput
                        onChangeText={input => this.passwordHandler(input)}
                        placeholder='Password'
                        secureTextEntry={true}
                        style={{
                            borderWidth: 3,
                            marginTop: 30,
                            marginHorizontal: 30,
                            borderRadius: 10,
                        }}
                    />
                    <TouchableOpacity
                        onPress={() => {
                            this.loginHandler(
                                this.state.email,
                                this.state.password,)
                        }}
                        style={styles.button}>
                        <Text style={{fontSize:20, color:'black'}}> Login </Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </ImageBackground>
        );
    }

}

const styles = StyleSheet.create({
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

