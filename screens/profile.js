
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { Avatar } from 'react-native-paper';
import { ImageBackground, Text, TextInput, StyleSheet, SafeAreaView, TouchableOpacity, Alert, ScrollView, View } from 'react-native';
import { SelectCountry } from 'react-native-element-dropdown';
import { backgroundImage } from '../styles/global';

const genderOption = [
    {
        value: '1',
        lable: 'Male',
    },
    {
        value: '2',
        lable: 'Female',
    },
    {
        value: '3',
        lable: 'Neutral',
    },
];

export default class Profile extends React.Component {

    /* Constructor */
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            contactNumber: '',
            email: '',
            address: '',
            editable: false,
            change: 'Edit',
            gender: '1',
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

    // handle is the profile detail editable
    editableHandler(editable) {
        if (this.state.name == '') {
            Alert.alert('Error', 'Name cannot be empty!')
        } else if (!/^\d+$/.test(this.state.contactNumber) && this.state.contactNumber != '') {
            Alert.alert('Error', 'Invalid Contact Number!')
        } else {
            this.setState({ editable: !editable })
            if (!editable) {
                this.setState({ change: 'Save' })
            } else {
                this.setState({ change: 'Edit' })
                AsyncStorage.multiSet([
                    ['name', this.state.name],
                    ['contactNumber', this.state.contactNumber],
                    ['gender', this.state.gender],
                    ['address', this.state.address]
                ])
            }
        }

    }

    addressHandler(input) {
        this.setState({ address: input })
    }

    componentDidMount() {
        AsyncStorage.multiGet(['name', 'contactNumber', 'email', 'gender', 'address']).then(value => {
            this.setState({ name: value[0][1] });
            this.setState({ contactNumber: value[1][1] });
            this.setState({ email: value[2][1] });
            this.setState({ gender: value[3][1] });
            this.setState({ address: value[4][1] });
        }
        )
    }



    render() {
        return (
            <ImageBackground source={backgroundImage} style={{flex:1}}>
                <SafeAreaView>

                    <ScrollView>

                        <View style={styles.picture}>
                            <Avatar.Text size={120} label={this.state.name.charAt(0)} color={'black'} style={{ backgroundColor: 'yellow' }} />
                        </View>

                        {/* <Text style={styles.firstInputField}>{this.state.name}</Text> */}
                        <TextInput value={this.state.name}
                            onChangeText={input => this.nameHandler(input)}
                            editable={this.state.editable}
                            style={styles.inputField}
                            placeholder='Name'
                        />

                        <SelectCountry
                            style={styles.dropdown}
                            selectedTextStyle={styles.selectedTextStyle}
                            iconStyle={styles.iconStyle}
                            maxHeight={200}
                            value={this.state.gender}
                            data={genderOption}
                            valueField="value"
                            labelField="lable"
                            disable={!this.state.editable}
                            onChange={selectedGender => {
                                this.setState({ gender: selectedGender.value });
                            }}
                        />

                        <Text style={styles.inputField}>{this.state.email}</Text>

                        <TextInput value={this.state.contactNumber}
                            onChangeText={input => this.contactNumberHandler(input)}
                            editable={this.state.editable}
                            style={styles.inputField}
                            placeholder='Contact Number'
                            maxLength={11}
                            keyboardType='number-pad'
                        />

                        <TextInput value={this.state.address}
                            onChangeText={input => this.addressHandler(input)}
                            editable={this.state.editable}
                            style={styles.inputField}
                            placeholder='Address'
                        />

                        <TouchableOpacity
                            onPress={() => {
                                this.editableHandler(this.state.editable)
                            }}
                            style={styles.button}>
                            <Text style={{fontSize:20, color:'black'}}> {this.state.change} </Text>
                        </TouchableOpacity>
                    </ScrollView>

                </SafeAreaView>
            </ImageBackground>
        );

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
    inputField: {
        color: 'black',
        fontSize: 20,
        height: 50,
        width: 200,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 10,
        borderWidth: 3,
        position: 'relative'
    },
    button: {
        backgroundColor: '#6495ed',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 50,
        width: 200,
        borderRadius: 10,
        marginTop: 20,

    },
    dropdown: {
        marginTop: 20,
        height: 50,
        width: 200,
        backgroundColor: 'transparent',
        borderRadius: 10,
        borderWidth: 3,
        paddingHorizontal: 8,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    selectedTextStyle: {
        color: 'black',
        textAlign: 'center',
    },
    picture: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 150,
        height: 150,
        marginTop: 40,
    },
})

