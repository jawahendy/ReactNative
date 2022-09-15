import FIREBASE from '../config/FIREBASE'
import { storeData } from '../utils'

export const REGISTER_USER = "REGISTER_USER"

export const RegisterUser = (data, password) => {
    return (dispatch) => {
        console.log("succes masuk loading");
        // LOADING
        dispatch({
            type: REGISTER_USER,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        FIREBASE.auth().createUserWithEmailAndPassword(data.email, password)
            .then((success) => {
                console.log("succes");
                // Signed in ,take UIS and make new data
                const dataBaru = {
                    ...data,
                    uid: success.user.uid
                }

                // simpan ke realtime data
                FIREBASE.database().ref('users/' + success.user.uid).set(dataBaru);

                // success
                dispatch({
                    type: REGISTER_USER,
                    payload: {
                        loading: false,
                        data: dataBaru,
                        errorMessage: false
                    }
                })

                // save local storage
                storeData('user', dataBaru)

            })
            .catch((error) => {
                console.log("mulai error", error);
                // Error catcth
                dispatch({
                    type: REGISTER_USER,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                })
                alert(error.message)
            });
    }
}