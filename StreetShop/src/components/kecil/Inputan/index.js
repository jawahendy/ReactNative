import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils';

const Inputan = ({ textarea, width, height, fontSize, placeholder, label, value, secureTextEntry, keyboardType, onChangeText }) => {

    if (textarea === true) {
        return (
            <View style={styles.container}>
                <Text style={styles.label(fontSize)}>{label} :</Text>
                <TextInput style={styles.inputTextarea(fontSize)} multiline={true} numberOfLines={4} placeholder={placeholder} value={value} onChangeText={onChangeText} />
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <Text style={styles.label(fontSize)}>{label} :</Text>
            <TextInput style={styles.input(fontSize, width, height)} value={value} keyboardType={keyboardType} secureTextEntry={secureTextEntry} onChangeText={onChangeText} />
        </View>
    )
}

export default Inputan

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    label: (fontSize) => ({
        fontSize: fontSize ? fontSize : 18,
        fontFamily: fonts.primary.reguler,
        color: colors.primary,
    }),
    input: (fontSize, width, height) => ({
        fontSize: fontSize ? fontSize : 18,
        fontFamily: fonts.primary.reguler,
        width: width,
        height: height,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.border,
        paddingVertical: 5,
        paddingHorizontal: 10,
    }),
    inputTextarea: (fontSize) => ({
        fontSize: fontSize ? fontSize : 18,
        fontFamily: fonts.primary.reguler,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.border,
        paddingVertical: 5,
        paddingHorizontal: 10,
        textAlignVertical: 'top',
    }),
})