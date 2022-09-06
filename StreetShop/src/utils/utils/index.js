import { Dimensions } from "react-native";
import { heightMobileUI, widthMobileUI } from '../constant';

export const windowsWidth = Dimensions.get('window').width;
export const windowsHeight = Dimensions.get('window').height;


export const responsiveWidth = (width) => {
    return windowsWidth * width / widthMobileUI
}

export const responsiveHeight = (height) => {
    return windowsHeight * height / heightMobileUI
}

export const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}