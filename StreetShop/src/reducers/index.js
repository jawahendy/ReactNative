import { combineReducers } from 'redux'
import RajaOngkirReducer from './rajaOngkir'
import RegisterUserReducer from './auth'


const rootReducer = combineReducers({
    RajaOngkirReducer,
    RegisterUserReducer
});

export default rootReducer