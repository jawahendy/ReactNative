import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { colors, fonts, numberWithCommas, responsiveHeight } from '../../utils'
import { Buttons, CardAlamat, Distances, Pilihan } from '../../components'
import { dummyPesanans, dummyProfile } from '../../data'
import { RFValue } from 'react-native-responsive-fontsize'

export default class Checkout extends Component {
    constructor(props) {
        super(props)

        this.state = {
            profile: dummyProfile,
            pesanan: dummyPesanans[0],
            expedisi: [],
        }
    }
    render() {
        const { profile, pesanan, expedisi } = this.state
        return (
            <View style={styles.pages}>
                <View style={styles.contain}>
                    <Text style={styles.TextBold}>Your location ?</Text>
                    <CardAlamat profile={profile} />

                    <View style={styles.total}>
                        <Text style={styles.textBold}>Amount :</Text>
                        <Text style={styles.textBold}>Rp. {numberWithCommas(pesanan.totalHarga)}</Text>
                    </View>

                    <Pilihan label="choose expedition " data={expedisi} />
                    <Distances height={10} />
                    <Text style={styles.TextBold}>Shipping cost :</Text>

                    <View style={styles.Shipping}>
                        <Text style={styles.text}>Weight :{pesanan.berat} kg</Text>
                        <Text style={styles.textBold}>Rp. {numberWithCommas(15000)}</Text>
                    </View>

                    <View style={styles.Shipping}>
                        <Text style={styles.text}>Estimation Time</Text>
                        <Text style={styles.textBold}>2-3 Days</Text>
                    </View>
                </View>

                <View style={styles.footer}>
                    <View style={styles.total}>
                        <Text style={styles.textBold}>Amount :</Text>
                        <Text style={styles.textBold}>Rp. {numberWithCommas(pesanan.totalHarga + 15000)}</Text>
                    </View>
                    <Buttons
                        title="PAY"
                        type="textIcon"
                        fontSize={18}
                        padding={responsiveHeight(15)}
                        icon="white-Cart"
                        onPress={() => this.props.navigation.navigate('Checkout')}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    pages: {
        backgroundColor: colors.white,
        flex: 1,
        paddingTop: 30,
        justifyContent: 'space-between'
    },
    contain: {
        paddingHorizontal: 30,
    },
    TextBold: {
        fontSize: 18,
        fontFamily: fonts.primary.bold,
        color: 'black',
        marginBottom: 20
    },
    textBold: {
        fontSize: RFValue(20),
        fontFamily: fonts.primary.bold,
        color: 'black',
    },
    total: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    Shipping: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: RFValue(20),
        fontFamily: fonts.primary.reguler,
        color: 'black',
    },
    footer: {
        paddingHorizontal: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 6.84,
        backgroundColor: colors.white,
        elevation: 11,
        paddingBottom: 30,
    },
})