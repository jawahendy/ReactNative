import {
    Text,
    StyleSheet,
    View,
    Platform,
    ScrollView,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Dimensions,
} from 'react-native'
import React, { Component } from 'react'
import { colors, fonts, responsiveHeight, responsiveWidth } from '../../utils'
import { ImgRegister1 } from '../../assets'
import { Buttons, Distances, Inputan } from '../../components'

export default class Register1 extends Component {
    render() {
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.page}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.ilustrasi}>
                            <ImgRegister1 />
                            <Distances height={10} />
                            <Text style={styles.title}>Register Account personal</Text>

                            <View style={styles.wrapperCirlce}>
                                <View style={styles.circlePrimary}></View>
                                <Distances width={10} />
                                <View style={styles.circleDisabled}></View>
                            </View>
                        </View>

                        <View style={styles.card}>
                            <Inputan label={"Name"} />
                            <Inputan label={"Email"} />
                            <Inputan
                                label={"Phone"}
                                keyboardType={Platform.OS === "ios" ? "name-phone-pad" : "number-pad"}
                            />
                            <Inputan
                                label={"Password"}
                                secureTextEntry
                            />
                            <Distances height={15} />

                            <Buttons title="CONTINUE" type="text" padding={10} fontSize={18} onPress={() => this.props.navigation.navigate('Register2')} />
                        </View>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white,
        height: Dimensions.get('window').height,
    },
    ilustrasi: {
        alignItems: 'center',
        marginTop: responsiveHeight(40),
    },
    title: {
        fontSize: 24,
        fontFamily: fonts.primary.reguler,
        color: colors.primary,
    },
    wrapperCirlce: {
        flexDirection: 'row',
        marginTop: 10,
    },
    circlePrimary: {
        backgroundColor: colors.primary,
        width: responsiveWidth(11),
        height: responsiveWidth(11),
        borderRadius: 10,
    },
    circleDisabled: {
        backgroundColor: colors.border,
        width: responsiveWidth(11),
        height: responsiveWidth(11),
        borderRadius: 10,
    },
    card: {
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
        marginBottom: 20,
    },
})