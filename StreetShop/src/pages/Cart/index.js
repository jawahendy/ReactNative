import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import { dummyPesanans } from '../../data'
import { Buttons, ListKeranjang } from '../../components'
import { colors, fonts, numberWithCommas, responsiveHeight } from '../../utils'
import { RFValue } from 'react-native-responsive-fontsize'

export default class Carts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pesanan: dummyPesanans[0]
        }
    }
    render() {
        const { pesanan } = this.state
        return (
            <View style={styles.pages}>
                <ListKeranjang keranjangs={pesanan.pesanans} />
                <View style={styles.footer}>
                    <View style={styles.total}>
                        <Text style={styles.textBold}>Amount :</Text>
                        <Text style={styles.textBold}>Rp. {numberWithCommas(pesanan.totalHarga)}</Text>
                    </View>
                    <Buttons
                        title="Check Out"
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
    total: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    textBold: {
        fontSize: RFValue(20),
        fontFamily: fonts.primary.bold,
        color: 'black',
    }
})