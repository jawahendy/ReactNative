import {
    Text,
    StyleSheet,
    View,
    Platform,
    ScrollView,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Dimensions,
    Alert,
} from 'react-native'
import React, { Component } from 'react'
import { colors, fonts, responsiveHeight, responsiveWidth } from '../../utils'
import { ImgRegister2 } from '../../assets'
import { Buttons, Distances, Inputan, Pilihan } from '../../components'
import { connect } from 'react-redux'
import { getProvinsiList, geCityList } from '../../actions/RajaongkirAction'
import { RegisterUser } from '../../actions/AuthAction'

class Register2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            kota: false,
            provinsi: false,
            alamat: '',
            dataProvinsi: [],
            dataKota: [],
            enabled: false,
        }
    }

    componentDidMount() {
        this.props.dispatch(getProvinsiList());
    }

    componentDidUpdate(prevProps) {
        const { RegisterResult } = this.props

        if (RegisterResult && prevProps.RegisterResult !== RegisterResult) {
            this.props.navigation.navigate('Home');
        }
    }

    changeProvince = (provinsi) => {
        this.setState({
            provinsi: provinsi,
            enabled: true
        })
        this.props.dispatch(geCityList(provinsi));
    }

    onContinue = () => {
        const { kota, provinsi, alamat } = this.state;

        if (kota && provinsi && alamat) {

            const data = {
                nama: this.props.route.params.nama,
                email: this.props.route.params.email,
                noHp: this.props.route.params.noHp,
                // password: this.props.route.params.password,
                alamat: alamat,
                provinsi: provinsi,
                kota: kota,
                status: 'user'
            }
            // console.log("datanya", data);

            // ke auth actions
            this.props.dispatch(RegisterUser(data, this.props.route.params.password));


        } else {

            Alert.alert("Incorret", "Please insert all field")

        }

    }

    render() {
        const { dataKota, dataProvinsi, kota, provinsi, alamat } = this.state;
        const { getProvinceResult, getCityResult, RegisterLoading } = this.props;
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.page}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.ilustrasi}>
                            <ImgRegister2 />
                            <Distances height={10} />
                            <Text style={styles.title}>Your's Addres</Text>

                            <View style={styles.wrapperCirlce}>
                                <View style={styles.circleDisabled}></View>
                                <Distances width={10} />
                                <View style={styles.circlePrimary}></View>
                            </View>
                        </View>

                        <View style={styles.card}>
                            <Inputan
                                label="Address"
                                textarea
                                value={alamat}
                                onChangeText={(alamat) => this.setState({ alamat })}
                            />

                            <Pilihan
                                label="Province"
                                data={getProvinceResult ? getProvinceResult : dataProvinsi}
                                selectedValue={provinsi}
                                onValueChange={(provinsi) => this.changeProvince(provinsi)}
                                enabled={true}
                            />
                            <Pilihan
                                label="City"
                                data={getCityResult ? getCityResult : dataKota}
                                selectedValue={kota}
                                onValueChange={(kota) => this.setState({
                                    kota: kota
                                })}
                                enabled={this.state.enabled}
                            />
                            <Distances height={15} />

                            <Buttons
                                title="CONTINUE"
                                type="text"
                                padding={10}
                                fontSize={18}
                                onPress={() => this.onContinue()}
                                loading={RegisterLoading}
                            />
                        </View>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        )
    }
}

const mapStateToProps = (state) => ({
    getProvinceResult: state.RajaOngkirReducer.getProvinceResult,
    getCityResult: state.RajaOngkirReducer.getCityResult,


    RegisterLoading: state.RegisterUserReducer.RegisterLoading,
    RegisterResult: state.RegisterUserReducer.RegisterResult,
    RegisterError: state.RegisterUserReducer.RegisterError,
})

export default connect(mapStateToProps, null)(Register2)

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white,
        height: Dimensions.get('window').height,
    },
    ilustrasi: {
        alignItems: 'center',
        marginTop: responsiveHeight(40),
    },
    title: {
        fontSize: 24,
        fontFamily: fonts.primary.reguler,
        color: colors.primary,
    },
    wrapperCirlce: {
        flexDirection: 'row',
        marginTop: 10,
    },
    circlePrimary: {
        backgroundColor: colors.primary,
        width: responsiveWidth(11),
        height: responsiveWidth(11),
        borderRadius: 10,
    },
    circleDisabled: {
        backgroundColor: colors.border,
        width: responsiveWidth(11),
        height: responsiveWidth(11),
        borderRadius: 10,
    },
    card: {
        marginHorizontal: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        backgroundColor: colors.white,
        elevation: 5,
        padding: 30,
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 20,
    },
})