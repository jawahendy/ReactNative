import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils'
import Distances from '../Distances'

const Loading = ({ padding, fontSize }) => {

    return (
        <TouchableOpacity style={styles.container(padding)}>
            <ActivityIndicator size={'small'} color={colors.primary} />
            <Distances width={5} />
            <Text style={styles.textJers(fontSize)}>Loading...</Text>
        </TouchableOpacity>
    )
}

export default Loading

const styles = StyleSheet.create({
    container: (padding) => ({
        backgroundColor: colors.border,
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