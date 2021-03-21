const initialState = {
    filterByCountryName: "",
    filterByContinent: "",
}

export default function listFilters(state = initialState, action){
    let updatedState = initialState;
    switch(action.type){
        case "SET_FILTER_BY_COUNTRY_NAME":
            const filterByContinent = state.filterByContinent
            updatedState = { filterByContinent , filterByCountryName: action.countryName }
            return updatedState;
        case "SET_FILTER_BY_CONTINENT":
            const filterByCountryName = state.filterByCountryName;
            updatedState = { filterByContinent: action.continent , filterByCountryName }
            return updatedState;
        default:
            return state;
    }
}