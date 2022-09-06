import { Text, StyleSheet, View, StatusBar, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { BannerSlider, Buttons, Distances, HeaderComponents, ListJersey, ListLiga } from '../../components'
import { colors, fonts } from '../../utils'
import { dummyJerseys, dummyLigas } from '../../data'

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ligas: dummyLigas,
            jerseys: dummyJerseys
        }
    }
    render() {
        const { ligas, jerseys } = this.state
        const { navigation } = this.props
        return (
            <View style={styles.page}>
                <StatusBar
                    backgroundColor="transparent"
                    translucent={true}
                />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <HeaderComponents navigation={navigation} />
                    <BannerSlider />
                    <View style={styles.league}>
                        <Text style={styles.titleLa}>League</Text>
                        <ListLiga ligas={ligas} />
                    </View>
                    <View style={styles.Jersey}>
                        <Text style={styles.titleJer}>Choose your Jersey</Text>
                        <ListJersey jerseys={jerseys} navigation={navigation} />
                        <Buttons title='LIHAT SEMUA' type='text' padding={7} onPress={() => {
                            navigation.navigate('ListJerseys')
                        }} />
                    </View>

                    <Distances height={100} />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white,
    },
    league: {
        marginHorizontal: 30,
        marginTop: 10,
    },
    titleLa: {
        fontSize: 18,
        fontFamily: fonts.primary.bold,
        color: colors.primary,
    },
    Jersey: {
        marginHorizontal: 30,
        marginTop: 10,
    },
    titleJer: {
        fontSize: 18,
        fontFamily: fonts.primary.bold,
        color: colors.primary,
    }
})