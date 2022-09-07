import { StyleSheet, View, StatusBar, Text, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { LogoUtamalogin } from '../../assets'
import { colors, fonts, responsiveHeight } from '../../utils'
import { Buttons, Distances, Inputan } from '../../components'
import { RFValue } from 'react-native-responsive-fontsize'

export default class Login extends Component {
    render() {
        return (
            <View style={styles.pages} >
                <StatusBar
                    backgroundColor="transparent"
                    translucent={true}
                />
                <View style={styles.logologin}>
                    <LogoUtamalogin />
                </View>

                <View style={styles.cardLogin}>
                    <Inputan label={'Email'} />
                    <Inputan label={'Password'} secureTextEntry />
                    <Distances height={27} />
                    <Buttons title="Login" type="text" padding={12} fontSize={18} />
                </View>

                <TouchableOpacity style={styles.register} onPress={() => this.props.navigation.navigate('Register1')}>
                    <Text style={styles.txtBlue}>Sign Up</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        backgroundColor: colors.white,
    },
    cardLogin: {
        marginHorizontal: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        backgroundColor: colors.white,
        elevation: 5,
        padding: 30,
        borderRadius: 10,
        marginTop: 20,
    },
    logologin: {
        alignItems: 'center',
        marginTop: responsiveHeight(117),
    },
    register: {
        alignItems: 'center',
        marginTop: 20,
    },
    txtBlue: {
        fontSize: RFValue(20),
        fontFamily: fonts.primary.bold,
        color: colors.primary
    }
})