import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CardHistory } from '../../kecil'

const ListHistory = ({ pesanans }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                {pesanans.map((pesanan) => {
                    return <CardHistory pesanan={pesanan} key={pesanan.id} />
                })}
            </View>
        </ScrollView>
    )
}

export default ListHistory

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 30,
        marginTop: 30,
    }
})