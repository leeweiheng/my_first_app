
import { react } from '@babel/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AsyncLocalStorage } from 'async_hooks';
import React from 'react';
import { Text, TextInput, StyleSheet, SafeAreaView } from 'react-native';

export default class Profile extends React.Component {

    /* Constructor */
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            contactNumber: '',
            email: '',
        };
    }
    componentDidMount() {
        AsyncStorage.multiGet(['name', 'contactNumber', 'email']).then(value => {
            this.setState({ name: value[0][1]});
            this.setState({contactNumber: value[1][1]});
            this.setState({email: value[2][1]});
        }
        )
    }



    render() {

        if (this.state.name == '' || this.state.contactNumber == '' || this.state.email == '') {
            return (
                <SafeAreaView>
                    <Text style={styles.loadingText}>Loading...</Text>
                </SafeAreaView>
            )

        } else {
            return (
                <SafeAreaView>
                    <Text style={styles.text}>{this.state.name}</Text>
                    <Text style={styles.text}>{this.state.email}</Text>
                    <Text style={styles.text}>{this.state.contactNumber}</Text>
                    {/* <TextInput
                    onChangeText={onEmailChange}
                    placeholder='Email'

                    style={{
                        borderWidth: 2,
                        marginTop: '80%',
                        marginHorizontal: 30,
                        //position: 'absolute'
                    }}
                /> */}
                    {/* <TextInput
                    onChangeText={onPasswordChange}
                    placeholder='Password'
                    secureTextEntry={true}

                    style={{
                        borderWidth: 2,
                        marginTop: 30,
                        marginHorizontal: 30,
                    }}
                /> */}
                </SafeAreaView>
            );
        }
    }

}

const styles = StyleSheet.create({
    loadingText: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        color: 'green',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: '30%',
        marginBottom: 'auto',
        borderWidth: 3,

    }
})

