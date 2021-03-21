export default function list(state = [], action){
    switch(action.type){
        case "SET_COUNTRY_LIST":
            return action.countriesList;
        default:
            return state;
    }
}