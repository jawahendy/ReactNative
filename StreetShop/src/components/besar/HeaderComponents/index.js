import { StyleSheet, View, TextInput } from 'react-native'
import React, { Component } from 'react'
import { colors, fonts, responsiveHeight } from '../../../utils'
import { Search } from '../../../assets'
import { Buttons, Distances } from '../../kecil'

export default class HeaderComponents extends Component {
    render() {
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.wrapperHeader}>

                    {/* serach item */}
                    <View style={styles.searchSection}>
                        <Search />
                        <TextInput placeholder='Search...' style={styles.input} placeholderTextColor={'grey'} />
                    </View>
                    <Distances width={10} />

                    {/* cart commponent */}
                    <Buttons
                        icon="keranjang"
                        totalKeranjang={2}
                        padding={10}
                        onPress={() => {
                            navigation.navigate('Carts')
                        }}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        height: responsiveHeight(150),
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    input: {
        fontSize: 16,
        fontFamily: fonts.primary.light,
        color: colors.primary,
    },
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: colors.white,
        borderRadius: 30,
        paddingLeft: 20,
        alignItems: 'center',
    },
    wrapperHeader: {
        marginTop: 40,
        marginHorizontal: 40,
        flexDirection: 'row',
    },

})