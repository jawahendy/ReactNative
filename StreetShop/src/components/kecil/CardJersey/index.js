import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, fonts, responsiveWidth } from '../../../utils'
import Buttons from '../Buttons'

const CardJersey = ({ jersey, navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.card} onPress={() => {
                navigation.navigate('JerseyDetail', { jersey })
            }}>
                <Image source={jersey.gambar[0]} style={styles.jerseyimg} />
                <Text style={styles.titleJer}>{jersey.nama}</Text>
            </TouchableOpacity>
            <Buttons type='text' title='Detail' padding={7} onPress={() => {
                navigation.navigate('JerseyDetail', { jersey })
            }} />
        </View>
    )
}

export default CardJersey

const styles = StyleSheet.create({
    container: {
        marginBottom: 25,
    },
    card: {
        backgroundColor: colors.white,
        width: responsiveWidth(150),
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    jerseyimg: {
        width: 124,
        height: 124,
    },
    titleJer: {
        fontFamily: fonts.primary.bold,
        fontSize: 13,
        textTransform: 'capitalize',
        textAlign: 'center',
        color: colors.secondary
    }
})