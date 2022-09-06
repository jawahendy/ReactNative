import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils'

const TextButtons = ({ title, padding, onPress, fontSize }) => {

    return (
        <TouchableOpacity style={styles.container(padding)} onPress={onPress}>
            <Text style={styles.textJers(fontSize)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TextButtons

const styles = StyleSheet.create({
    container: (padding) => ({
        backgroundColor: colors.primary,
        padding: padding,
        borderRadius: 30,
        alignItems: 'center',
    }),
    textJers: (fontSize) => ({
        color: colors.white,
        textAlign: "center",
        fontSize: fontSize ? fontSize : 13,
        fontFamily: fonts.primary.bold,
    })
})