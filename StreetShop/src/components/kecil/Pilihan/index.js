import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { colors, fonts, responsiveHeight } from '../../../utils'
import { Picker } from '@react-native-picker/picker';

const Pilihan = ({ label, data, width, height, fontSize, selectedValue, onValueChange, enabled }) => {
    // const [selectedValue, setSelectedValue] = useState('');
    return (
        <View style={styles.container}>
            <Text style={styles.label(fontSize)}>{label} :</Text>
            <View style={styles.wrapperPicker}>
                <Picker
                    selectedValue={selectedValue}
                    placeholder="Pilih"
                    style={styles.picker(width, height, fontSize)}
                    onValueChange={onValueChange}
                    enabled={enabled}
                >
                    <Picker.Item label="CHOOSE" value="" style={styles.pick} />
                    {data.map((item, index) => {

                        if (label == "Province") {

                            return <Picker.Item label={item.province} value={item.province_id} key={item.province_id} />

                        } else if (label == "City") {

                            return <Picker.Item label={item.type + " " + item.city_name} value={item.city_id} key={item.city_id} />

                        } else {

                            return <Picker.Item label={item} value={item} key={index} />

                        }
                    })}
                </Picker>
            </View>
        </View>
    )
}

export default Pilihan

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    label: (fontSize) => ({
        fontSize: fontSize ? fontSize : 18,
        fontFamily: fonts.primary.reguler,
        color: colors.primary,
    }),
    wrapperPicker: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.border,
    },
    picker: (width, height, fontSize) => ({
        fontSize: fontSize ? fontSize : 18,
        fontFamily: fonts.primary.reguler,
        width: width,
        height: height ? height : responsiveHeight(46),
        textAlign: 'center',
    }),
})