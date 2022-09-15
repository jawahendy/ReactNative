import { REGISTER_USER } from "../../actions/AuthAction";

const initialState = {
    RegisterLoading: false,
    RegisterResult: false,
    RegisterError: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case REGISTER_USER:
            return {
                ...state,
                RegisterLoading: action.payload.loading,
                RegisterResult: action.payload.data,
                RegisterError: action.payload.errorMessage,
            }
        default:
            return state
    }
}