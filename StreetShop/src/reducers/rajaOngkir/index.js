import { GET_PROVINSI, GET_CITY } from "../../actions/RajaongkirAction";

const initialState = {
    getProvinceLoading: false,
    getProvinceResult: false,
    getProvinceError: false,

    getCityLoading: false,
    getCityResult: false,
    getCityError: false,

}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PROVINSI:
            return {
                ...state,
                getProvinceLoading: action.payload.loading,
                getProvinceResult: action.payload.data,
                getProvinceError: action.payload.errorMessage,
            }

        case GET_CITY:
            return {
                ...state,
                getCityLoading: action.payload.loading,
                getCityResult: action.payload.data,
                getCityError: action.payload.errorMessage,
            }
        default:
            return state
    }
}