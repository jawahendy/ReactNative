import { StyleSheet, View, StatusBar } from 'react-native'
import React, { Component } from 'react'
import { LogoSplash } from '../../assets'

export default class Splash extends Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.replace('MainApp')
        }, 3000)
    }

    render() {
        return (
            <View style={styles.pages} >
                <StatusBar
                    backgroundColor="transparent"
                    translucent={true}
                />
                <LogoSplash />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3D228A',
    }
})