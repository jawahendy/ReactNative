import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts, numberWithCommas, responsiveHeight, responsiveWidth } from '../../../utils'
import Distances from '../Distances'
import { RFValue } from 'react-native-responsive-fontsize'

const CardHistory = ({ pesanan }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.tanggal}>{pesanan.tanggalPemesanan}</Text>
            {pesanan.pesanans.map((history, index) => {
                return (
                    <View key={index} style={styles.history}>
                        <Text style={styles.txtBold}>{index + 1}.</Text>
                        <Image source={history.product.gambar[0]} style={styles.jersey} />
                        <View style={styles.desc}>
                            <Text style={styles.nama}>{history.product.nama}</Text>
                            <Text style={styles.harga}>Price : Rp. {numberWithCommas(history.product.harga)}</Text>

                            <Distances height={10} />

                            <Text style={styles.txtBold}>Note : {history.jumlahPesan}</Text>
                            <Text style={styles.txtBold}>Total Price : Rp. {numberWithCommas(history.totalHarga)}</Text>
                        </View>
                    </View>
                )
            })}
            <Distances height={10} />
            <View style={styles.footer}>

                <View style={styles.label}>
                    <Text style={styles.txtblue}>Status :</Text>
                    <Text style={styles.txtblue}>shipping cost (2-3 Days) :</Text>
                    <Text style={styles.txtblue}>Total Price :</Text>
                </View>

                <View style={styles.label}>
                    <Text style={styles.txtblue}>{pesanan.status}</Text>
                    <Text style={styles.txtblue}>Rp. 15.000</Text>
                    <Text style={styles.txtblue}> Rp.{numberWithCommas(pesanan.totalHarga + 15000)}</Text>
                </View>
            </View>
        </View>
    )
}

export default CardHistory

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
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
    },
    history: {
        flexDirection: 'row',
        marginTop: 10,
    },
    jersey: {
        width: responsiveWidth(66),
        height: responsiveHeight(66),
    },
    desc: {
        marginLeft: responsiveWidth(7),
    },
    tanggal: {
        fontSize: RFValue(14),
        fontFamily: fonts.primary.bold,
        color: 'black',
    },
    txtBold: {
        fontSize: RFValue(11),
        fontFamily: fonts.primary.bold,
        color: 'black',
    },
    nama: {
        fontSize: RFValue(14),
        fontFamily: fonts.primary.bold,
        color: 'black',
        textTransform: 'capitalize',
    },
    harga: {
        fontSize: RFValue(12),
        fontFamily: fonts.primary.reguler,
        color: 'grey',
    },
    footer: {
        flexDirection: 'row',
    },
    label: {
        flex: 1,
        marginLeft: 5,
    },
    txtblue: {
        fontSize: RFValue(10),
        fontFamily: fonts.primary.bold,
        color: colors.primary,
        textTransform: 'uppercase',
        textAlign: 'right',
    }
})