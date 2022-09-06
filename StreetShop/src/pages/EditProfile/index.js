import { Text, StyleSheet, View, ScrollView, Image } from 'react-native'
import React, { Component } from 'react'
import { dummyProfile } from '../../data'
import { colors, fonts, responsiveHeight, responsiveWidth } from '../../utils'
import { Buttons, Distances, Inputan, Pilihan } from '../../components'
import { RFValue } from 'react-native-responsive-fontsize'

export default class EditProfile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dataProvinsi: [],
            dataKota: [],
            profile: dummyProfile,
        }
    }
    render() {
        const { dataKota, dataProvinsi, profile } = this.state
        return (
            <View style={styles.pages}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Inputan label="Name" value={profile.nama} />
                    <Inputan label="Email" value={profile.email} />
                    <Inputan label="Number HP" value={profile.nomerHp} />
                    <Inputan label="Address" value={profile.alamat} textarea />

                    <Pilihan label="Province" data={dataProvinsi} />
                    <Pilihan label="City" data={dataKota} />

                    <View style={styles.inputfoto}>
                        <Text style={styles.label}>
                            Profile Picture
                        </Text>

                        <View style={styles.wrapperimg}>
                            <Image source={profile.avatar} style={styles.foto} />

                            <View style={styles.changepict}>
                                <Buttons title="Change Picture" type="text" padding={10} />
                            </View>
                        </View>
                    </View>

                    <View style={styles.btnsubmit}>
                        <Buttons title="SUBMIT" type="text" padding={responsiveHeight(10)} fontSize={RFValue(14)} />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: 30,
        paddingTop: 10,
    },
    inputfoto: {
        marginTop: 20,
    },
    label: {
        fontSize: 18,
        fontFamily: fonts.primary.reguler,
        color: colors.primary,
    },
    wrapperimg: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    foto: {
        width: responsiveWidth(150),
        height: responsiveWidth(150),
        borderRadius: 40,
        alignSelf: 'flex-start',
    },
    changepict: {
        marginRight: 20
    },
    btnsubmit: {
        marginVertical: 20
    }
})