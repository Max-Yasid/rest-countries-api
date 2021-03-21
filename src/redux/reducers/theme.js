import isDarkThemeSelected from './../../theme/properties';

const initialState = isDarkThemeSelected(false);

export default function theme(state = initialState, action){
    switch(action.type){
        case "SWITCH_TO_DARK_MODE":
            return isDarkThemeSelected(true);
        case "SWITCH_TO_LIGHT_MODE":
            return isDarkThemeSelected(false);
        default: 
            return state;
    }

}