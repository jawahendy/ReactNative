import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, responsiveHeight, responsiveWidth } from '../../../utils'

const CardLiga = ({ liga }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image source={liga.gambar} style={styles.logo} />
        </TouchableOpacity>
    )
}

export default CardLiga

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 10,
        borderRadius: 50,
        width: 80,
        height: 80,
    },
    logo: {
        width: responsiveWidth(50),
        height: responsiveHeight(50),
        alignSelf: 'center',
        top: 5,
    },
})