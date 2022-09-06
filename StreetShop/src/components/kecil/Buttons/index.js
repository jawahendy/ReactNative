import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Shopping, ArrowLeft } from '../../../assets'
import { colors } from '../../../utils'
import TextButtons from './textOnly'
import TextIcon from './Texticons'
import { RFValue } from 'react-native-responsive-fontsize'

const Buttons = (props) => {

    const Icon = () => {
        if (icon === "keranjang") {
            return <Shopping />
        } else if (icon === "Arrow-left") {
            return <ArrowLeft />
        }

        return <Shopping />
    }
    const { icon, totalKeranjang, padding, type, onPress } = props

    if (type === 'text') {
        return <TextButtons {...props} />
    } else if (type === 'textIcon') {
        return <TextIcon {...props} />
    }

    return (
        <TouchableOpacity style={styles.container(padding)} onPress={onPress}>
            <View>
                <Icon />
            </View>

            {totalKeranjang && (
                <View style={styles.notif}>
                    <Text style={styles.textNotif}>{totalKeranjang}</Text>
                </View>
            )}
        </TouchableOpacity>
    )
}

export default Buttons

const styles = StyleSheet.create({
    container: (padding) => ({
        backgroundColor: colors.white,
        padding: padding,
        borderRadius: 50,
        alignItems: 'center',
    }),
    notif: {
        position: 'absolute',
        top: -10,
        right: -10,
        backgroundColor: 'red',
        borderRadius: 30,
        padding: 5,
    },
    textNotif: {
        fontSize: RFValue(12),
        color: colors.white
    }
})