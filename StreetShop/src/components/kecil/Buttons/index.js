import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Shopping, ArrowLeft } from '../../../assets'
import { colors, responsiveWidth } from '../../../utils'
import TextButtons from './textOnly'
import TextIcon from './Texticons'
import { RFValue } from 'react-native-responsive-fontsize'
import Loading from './Loading'

const Buttons = (props) => {

    const Icon = () => {
        if (icon === "keranjang") {
            return <Shopping />
        } else if (icon === "Arrow-left") {
            return <ArrowLeft />
        }

        return <Shopping />
    }
    const { icon, totalKeranjang, padding, type, onPress, loading } = props

    if (loading) {
        return <Loading {...props} />
    }

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
        borderRadius: 70,
        alignItems: 'center',
        height: responsiveWidth(50),
        width: responsiveWidth(50),
        alignSelf: 'center'
    }),
    notif: {
        position: 'absolute',
        top: -10,
        right: -10,
        backgroundColor: 'red',
        borderRadius: 30,
        padding: 5,
        height: responsiveWidth(30),
        width: responsiveWidth(30),
    },
    textNotif: {
        fontSize: RFValue(15),
        color: colors.white,
        alignSelf: 'center',
        bottom: 2
    }
})