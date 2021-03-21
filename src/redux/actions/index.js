//THEME
export const switchToDarkMode = () => ({
    type: "SWITCH_TO_DARK_MODE",
});

export const switchToLightMode = () => ({
    type: "SWITCH_TO_LIGHT_MODE",
});

//LIST

export const setCountryList = (countriesList) => ({
    type: "SET_COUNTRY_LIST",
    countriesList,
});

//LIST FILTERS

export const nameCountryFilter = (countryName) => ({
    type: "SET_FILTER_BY_COUNTRY_NAME",
    countryName,
});

export const countryFilterByContinent = (continent) => ({
    type: "SET_FILTER_BY_CONTINENT",
    continent,
});