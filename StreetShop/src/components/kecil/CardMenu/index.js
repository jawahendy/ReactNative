import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Arrowright } from '../../../assets'
import { colors, fonts, responsiveHeight } from '../../../utils'

const CardMenu = ({ menu, navigation }) => {
    return (
        <TouchableOpacity style={styles.container}
            onPress={() => navigation.navigate(menu.halaman)}
        >
            <View style={styles.menus}>
                {menu.gambar}
                <Text style={styles.textmenu}>{menu.nama}</Text>
            </View>
            <View style={styles.arrow}>
                <Arrowright />
            </View>
        </TouchableOpacity>
    )
}

export default CardMenu

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 15,
        justifyContent: 'space-between',
        backgroundColor: colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        borderRadius: 30,
        marginHorizontal: 30,
        padding: responsiveHeight(20),
    },
    textmenu: {
        fontSize: 18,
        fontFamily: fonts.primary.bold,
        color: colors.secondary,
        marginLeft: 20
    },
    menus: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    arrow: {
        alignSelf: 'center',
    }
})