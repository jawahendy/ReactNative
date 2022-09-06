import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CardJersey } from '../../kecil'

const ListJersey = ({ jerseys, navigation }) => {
    return (
        <View style={styles.container}>
            {jerseys.map((jersey) => {
                return (
                    <CardJersey key={jersey.id} jersey={jersey} navigation={navigation} />
                )
            })}
        </View>
    )
}

export default ListJersey

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 10
    }
})