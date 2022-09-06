import { StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { colors, responsiveHeight, responsiveWidth } from '../../utils'
import { Buttons, Inputan } from '../../components'
import { RFValue } from 'react-native-responsive-fontsize'

export default class ChangePassword extends Component {
    render() {
        return (
            <View style={styles.pages}>
                <View>
                    <Inputan label=" Old Password" secureTextEntry={true} />
                    <Inputan label="New Password" secureTextEntry={true} />
                    <Inputan label="Confrim Password" secureTextEntry={true} />
                </View>

                <View style={styles.btnsubmit}>
                    <Buttons
                        title="SUBMIT"
                        type="text"
                        padding={responsiveHeight(18)}
                        fontSize={RFValue(14)}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: 30,
        paddingTop: 10,
        justifyContent: 'space-between',
    },
    btnsubmit: {
        marginVertical: 30,
    }
})
