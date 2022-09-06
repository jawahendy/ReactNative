import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { HomeAktif, HomeIntAktif, JerseyAktif, JerseyInAktif, ProfilInAktif, ProfileAktif } from '../../../assets'
import { colors, fonts } from '../../../utils'

const TabItem = ({ isFocused, onLongPress, onPress, label }) => {

    const Icon = () => {
        if (label === "Home") {
            return isFocused ? <HomeAktif /> : <HomeIntAktif />
        } else if (label === "Jersey") {
            return isFocused ? <JerseyAktif /> : <JerseyInAktif />
        } else if (label === "Profile") {
            return isFocused ? <ProfileAktif /> : <ProfilInAktif />
        }

        return <HomeIntAktif />
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}
        >
            <Icon />
            <Text style={styles.text(isFocused)}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        // flex: 1
    },
    text: (isFocused) => ({
        color: isFocused ? colors.white : colors.secondary,
        fontSize: 11,
        marginTop: 4,
        fontFamily: fonts.primary.reguler,
    })
})