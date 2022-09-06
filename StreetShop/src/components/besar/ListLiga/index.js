import { StyleSheet, View } from 'react-native'
import React from 'react'
import CardLiga from '../../kecil/CardLiga'

const ListLiga = ({ ligas }) => {
    return (
        <View style={styles.container}>
            {ligas.map((liga) => {
                return (
                    <CardLiga liga={liga} key={liga.id} />
                )
            })}
        </View>
    )
}

export default ListLiga

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    }
})