import { Text, StyleSheet, View, Platform } from 'react-native'
import React, { Component } from 'react'
import { colors, fonts, numberWithCommas, responsiveHeight, responsiveWidth } from '../../utils'
import { Buttons, CardLiga, Distances, Inputan, Pilihan } from '../../components'
import { RFValue } from "react-native-responsive-fontsize";
import { SliderBox } from "react-native-image-slider-box";


export default class JerseyDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            jersey: this.props.route.params.jersey,
            images: this.props.route.params.jersey.gambar,
        }
    }
    render() {
        const { navigation } = this.props
        const { jersey, images } = this.state
        return (
            <View style={styles.page}>
                <View style={styles.buttons}>
                    <Buttons icon="Arrow-left" padding={7} onPress={() => navigation.goBack()} />
                </View>
                <View style={styles.imageslider}>
                    <SliderBox images={images}
                        sliderBoxHeight={responsiveHeight(300)}
                        ImageComponentStyle={styles.slider}
                        dotStyle={styles.dotStyle}
                        dotColor={colors.primary}
                        imageLoadingColor={colors.primary}
                        resizeMethod={'resize'}
                        resizeMode={'contain'}
                    />
                </View>
                <View style={styles.container}>
                    <View style={styles.liga}>
                        <CardLiga liga={jersey.liga} />
                    </View>
                    <View style={styles.desc}>
                        <Text style={styles.nama}>{jersey.nama}</Text>
                        <Text style={styles.harga}>Price : Rp. {numberWithCommas(jersey.harga)}</Text>
                        <View style={styles.garis} />

                        <View style={styles.wrapperJB}>
                            <Text style={styles.jenisberat}>Type : {jersey.jenis}</Text>
                            <Text style={styles.jenisberat}> Weight : {jersey.berat}</Text>
                        </View>

                        <View style={styles.wrapperInput}>
                            <Inputan
                                label="Amount"
                                width={responsiveWidth(166)}
                                height={responsiveHeight(53)}
                                fontSize={13}
                                keyboardType={Platform.OS === "ios" ? "name-phone-pad" : "number-pad"}
                            />
                            <Pilihan
                                label="Size"
                                width={responsiveWidth(166)}
                                height={responsiveHeight(53)}
                                fontSize={13}
                                data={jersey.ukuran}
                            />
                        </View>
                        <Inputan
                            textarea={true}
                            label="Information"
                            fontSize={13}
                            placeholder="Note..."

                        />
                        <Distances height={10} />
                        <Buttons
                            title="Pick To Cart"
                            type="textIcon"
                            icon="white-Cart"
                            padding={responsiveHeight(15)}
                            fontSize={18}
                        />
                    </View>
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
        height: responsiveHeight(470),
        backgroundColor: colors.white,
        width: '100%',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
    },
    buttons: {
        position: 'absolute',
        marginTop: 35,
        marginLeft: 30,
    },
    desc: {
        marginHorizontal: 30,
    },
    nama: {
        fontSize: RFValue(20),
        fontFamily: fonts.primary.bold,
        color: colors.primary,
        textTransform: 'capitalize',
    },
    harga: {
        fontSize: RFValue(20),
        fontFamily: fonts.primary.reguler,
        color: 'grey',
        marginTop: 5,
    },
    liga: {
        alignItems: 'flex-end',
        marginRight: 35,
        marginTop: -30
    },
    garis: {
        borderWidth: 0.2,
        marginTop: 15,
        color: 'grey'
    },
    wrapperJB: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    jenisberat: {
        fontSize: RFValue(13),
        fontFamily: fonts.primary.reguler,
        color: 'grey',
    },
    slider: {
        borderRadius: 10,
    },
    dotStyle: {
        width: 10,
        height: 10,
        borderRadius: 30,
    },
    imageslider: {
        position: 'absolute',
        marginTop: 90,
    },
    wrapperInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})