import axios from 'axios';
import { API_HEADER_RAJAONGKIR, API_RAJAONKIR, API_TIMEOUT } from '../utils/constant'

export const GET_PROVINSI = "GET_PROVINSI";
export const GET_CITY = "GET_CITY";

export const getProvinsiList = () => {
    return (dispatch) => {

        // LOADING
        dispatch({
            type: GET_PROVINSI,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        // AXIOS GET province
        axios({
            method: 'GET',
            url: API_RAJAONKIR + 'province',
            timeout: API_TIMEOUT,
            headers: API_HEADER_RAJAONGKIR
        }).then((response) => {
            if (response.status !== 200) {

                // Error catcth
                dispatch({
                    type: GET_PROVINSI,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: response
                    }
                })
            } else {
                // success catch
                dispatch({
                    type: GET_PROVINSI,
                    payload: {
                        loading: false,
                        data: response.data ? response.data.rajaongkir.results : [],
                        errorMessage: false
                    }
                })
            }
        }).catch((error) => {

            // Error catcth
            dispatch({
                type: GET_PROVINSI,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error
                }
            })
            alert(error)

        })
    }
}

export const geCityList = (province_id) => {
    return (dispatch) => {

        // LOADING
        dispatch({
            type: GET_CITY,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        // AXIOS GET province
        axios({
            method: 'GET',
            url: API_RAJAONKIR + 'city?province=' + province_id,
            timeout: API_TIMEOUT,
            headers: API_HEADER_RAJAONGKIR
        }).then((response) => {
            if (response.status !== 200) {

                // Error catcth
                dispatch({
                    type: GET_CITY,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: response
                    }
                })
            } else {
                // success catch
                dispatch({
                    type: GET_CITY,
                    payload: {
                        loading: false,
                        data: response.data ? response.data.rajaongkir.results : [],
                        errorMessage: false
                    }
                })
            }
        }).catch((error) => {

            // Error catcth
            dispatch({
                type: GET_CITY,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error
                }
            })
            alert(error)

        })
    }
}