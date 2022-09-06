import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { dummyPesanans } from '../../data'
import { colors } from '../../utils'
import { ListHistory } from '../../components/'

export default class History extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pesanans: dummyPesanans,
        }
    }
    render() {
        const { pesanans } = this.state
        return (
            <View style={styles.pages}>
                <ListHistory pesanans={pesanans} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    pages: {
        backgroundColor: colors.white,
        flex: 1,
    }
})