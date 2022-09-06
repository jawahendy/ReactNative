import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils'

const CardAlamat = ({ profile }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Address :</Text>
            <Text style={styles.address}>{profile.alamat}</Text>
            <Text style={styles.address}>City : {profile.kota}</Text>
            <Text style={styles.address}>province : {profile.provinsi}</Text>
            <TouchableOpacity>
                <Text style={styles.changeAdd}>Change address?</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CardAlamat

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
        padding: 15,
        elevation: 5,
        borderRadius: 10,
        marginTop: 15,
    },
    title: {
        fontFamily: fonts.primary.bold,
        fontSize: 14,
        marginBottom: 5,
        color: 'black',
    },
    address: {
        fontFamily: fonts.primary.reguler,
        fontSize: 14,
        color: 'grey',
    },
    changeAdd: {
        fontFamily: fonts.primary.reguler,
        fontSize: 14,
        color: colors.primary,
        textAlign: 'right',
    },
})