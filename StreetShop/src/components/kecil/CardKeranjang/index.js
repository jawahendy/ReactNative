import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, fonts, numberWithCommas, responsiveHeight, responsiveWidth } from '../../../utils'
import { Clear } from '../../../assets'
import { RFValue } from 'react-native-responsive-fontsize'

const CardKeranjang = ({ keranjang }) => {
    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <Image source={keranjang.product.gambar[0]} style={styles.gambar} />
            </View>

            <View style={styles.desc}>
                <Text style={styles.nama}>{keranjang.product.nama}</Text>
                <Text style={styles.text}> RP. {numberWithCommas(keranjang.product.harga)}</Text>
                <Text style={styles.title}> Quantity: <Text style={styles.maintitle}>{keranjang.jumlahPesan}</Text></Text>
                <Text style={styles.title}> Size: <Text style={styles.maintitle}>{keranjang.ukuran}</Text></Text>
                <Text style={styles.title}> Amount: <Text style={styles.maintitle}>Rp. {numberWithCommas(keranjang.totalHarga)}</Text></Text>
                <Text style={styles.title}> Note: {'\n'}<Text style={styles.maintitle}> {keranjang.keterangan}</Text></Text>
            </View>

            <View style={styles.hapus}>
                <TouchableOpacity>
                    <Clear />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CardKeranjang

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 15,
        backgroundColor: colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        borderRadius: 10,
        marginHorizontal: 30,
        paddingVertical: responsiveHeight(19),
        paddingHorizontal: responsiveHeight(19),
    },
    gambar: {
        width: responsiveWidth(60),
        height: responsiveHeight(60),
        resizeMode: 'contain',
    },
    hapus: {
        flex: 1,
        alignItems: 'flex-end',
        paddingRight: 10
    },
    nama: {
        fontSize: RFValue(12),
        fontFamily: fonts.primary.bold,
        color: 'black',
        textTransform: 'capitalize'
    },
    text: {
        fontSize: RFValue(11),
        fontFamily: fonts.primary.reguler,
        color: 'grey',
        paddingBottom: 10
    },
    image: {
        alignSelf: 'center',
    },
    title: {
        fontSize: RFValue(11),
        fontFamily: fonts.primary.bold,
        color: 'black',
        textTransform: 'capitalize'
    },
    maintitle: {
        fontSize: RFValue(11),
        fontFamily: fonts.primary.reguler,
        color: 'grey',
        paddingLeft: 10,
    }
})