import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'
import { colors, fonts, responsiveHeight, responsiveWidth } from '../../utils'
import { dummyProfile, menus } from '../../data'
import { RFValue } from "react-native-responsive-fontsize";
import { ListMenu } from '../../components/besar';

export default class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            profile: dummyProfile,
            menus: menus,
        }
    }
    render() {
        const { profile, menus } = this.state
        return (
            <View style={styles.page}>
                <View style={styles.container}>
                    <Image source={profile.avatar} style={styles.avatar} />
                    <View style={styles.profile}>
                        <Text style={styles.name}>{profile.nama}</Text>
                        <Text style={styles.description}>No Hp: {profile.nomerHp}</Text>
                        <Text style={styles.description}>{profile.alamat}, {profile.kota}</Text>
                    </View>
                    <ListMenu menus={menus} navigation={this.props.navigation} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.primary
    },
    container: {
        position: 'absolute',
        bottom: 0,
        height: responsiveHeight(680),
        backgroundColor: colors.white,
        width: '100%',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
    },
    avatar: {
        width: responsiveWidth(150),
        height: responsiveWidth(150),
        borderRadius: 40,
        alignSelf: 'center',
        marginTop: -responsiveWidth(75)
    },
    profile: {
        marginTop: 10,
        alignItems: 'center',
    },
    name: {
        fontFamily: fonts.primary.bold,
        fontSize: RFValue(24),
        color: colors.primary
    },
    description: {
        fontFamily: fonts.primary.reguler,
        fontSize: RFValue(18),
        color: 'grey'
    },
})