import moonLightMode from "./../assets/svg/moon-regular.svg";
import moonDarkMode from "./../assets/svg/moon-solid.svg";
import leftArrow from "./../assets/svg/left-arrow.svg";
import searchLight from "./../assets/svg/search-solid.svg";
import searchDark from "./../assets/svg/search-dark.svg";
import leftArrowDark from "./../assets/svg/left-arrow-dark.svg";

export default function themeProperties(isDarkThemeSelected = true){
    if(isDarkThemeSelected){
        return {
            description: "dark",
            elements: "hsl(209, 23%, 22%)",
            background: "hsl(207, 26%, 17%)",
            text: "hsl(0, 0%, 100%)",
            shadow: "0 2px 2px hsl(208, 26%, 13%)",
            boxShadowAll: "0 0 10px hsl(208, 26%, 13%)",
            border: "2px solid hsl(208, 26%, 13%)",
            moon: moonDarkMode,
            arrow: leftArrowDark,
            search: searchDark,
        };
    }
    return {
        description: "light",
        text: "hsl(200, 15%, 8%)",
        darkGreyInput: "hsl(0, 0%, 52%)",
        background: "hsl(0, 0%, 98%)",
        elements: "hsl(0, 0%, 100%)",
        shadow: "0 2px 2px hsl(0, 0%, 93%)",
        boxShadowAll: "0 0px 10px hsl(0, 0%, 90%)",
        border: "2px solid hsl(0, 0%, 90%)",
        moon: moonLightMode,
        arrow: leftArrow,
        search: searchLight,
    };
}