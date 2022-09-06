import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Shopping, ArrowLeft, ChartWhite } from '../../../assets'
import { colors, fonts } from '../../../utils'
import Distances from '../Distances'


const TextIcon = ({ icon, padding, onPress, title, fontSize }) => {

    const Icon = () => {
        if (icon === "keranjang") {
            return <Shopping />
        } else if (icon === "Arrow-left") {
            return <ArrowLeft />
        } else if (icon === "white-Cart") {
            return <ChartWhite />
        }

        return <Shopping />
    }

    return (
        <TouchableOpacity style={styles.container(padding)} onPress={onPress}>
            <Icon />
            <Distances width={5} />
            <Text style={styles.title(fontSize)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TextIcon

const styles = StyleSheet.create({
    container: (padding) => ({
        backgroundColor: colors.primary,
        padding: padding,
        borderRadius: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }),
    title: (fontSize) => ({
        color: colors.white,
        fontSize: fontSize ? fontSize : 15,
        fontFamily: fonts.primary.bold,
    }),
})