import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './countryInfo.css';

export default class CountryInfo extends Component{
    country;
    render(){ 
    this.country = this.props.match.params.country;
    let countryInfo;
    let concatenatedCurrencies = "";
    let concatenatedLanguages = "";
    let populationWithDotsSeparation = "";
    let borderCountriesList = [];
    try{
    countryInfo = this.props.countriesList.find(countryInfo => countryInfo.name === this.country);
    //GET THE BORDER COUNTRIES
    borderCountriesList = this.props.countriesList.filter((country) => {
        return countryInfo.borders.find((borderCountry) => country.alpha3Code === borderCountry);
    });
    //ADD DOTS TO POPULATION NUMBER
    let populationToArray = countryInfo.population.toString().split('');
    populationToArray.reverse().forEach((letter, i) => {
        if(i === 0){
            return populationWithDotsSeparation += letter;
        }
        if(Number.isInteger(i / 3)){
            populationWithDotsSeparation += `.${letter}`;
        }else{
            populationWithDotsSeparation += letter;
        }
    });
    populationWithDotsSeparation = populationWithDotsSeparation.split('').reverse().join('');

    // CONCAT CURRENCIES
    countryInfo.currencies.forEach((currency, i) => {
        if(i === 0)
            return concatenatedCurrencies += currency.name;
        concatenatedCurrencies += `, ${currency.name}`;
    });
    // CONCANT LANGUAGES
    countryInfo.languages.forEach((language, i) => {
        if(i === 0)
            return concatenatedLanguages += language.name;
            concatenatedLanguages += `, ${language.name}`;
    });
    }catch(ex){

    }
    return(
        <div className="country-info-container">
            <div className="back-button-container">
                <Link 
                    style={{ backgroundColor: this.props.theme.elements, color: this.props.theme.text, boxShadow: this.props.theme.boxShadowAll}} 
                    className="back-button" to={"/"}
                >
                    <img className="mr-1" src={this.props.theme.arrow} width={18} alt=""/> Back 
                </Link>
            </div>
            <main className="content-container">
                <div className="country-info-flag-container">
                    <img className="flag-country-info" src={countryInfo?.flag} alt=""/>
                </div>
                <div className="info-container">
                    <br/>
                    <h5 
                        style={{ color: this.props.theme.text }} 
                        className="country-info-name"
                    >
                        {countryInfo?.name}
                    </h5>
                    <div className="country-info-info">
                        <section className="country-info-section-properties-1">
                            <p style={{ color: this.props.theme.text }} className="mr-0">
                                <span className="country-info-property">Native Name: </span>
                                {countryInfo?.nativeName}
                            </p>
                            <p style={{ color: this.props.theme.text }} className="mr-0">
                                <span className="country-info-property">Population: </span>
                                {populationWithDotsSeparation}
                            </p>
                            <p style={{ color: this.props.theme.text }} className="mr-0">
                                <span className="country-info-property">Region: </span>
                                {countryInfo?.region}
                            </p>
                            <p style={{ color: this.props.theme.text }} className="mr-0">
                                <span className="country-info-property">Sub region: </span>
                                {countryInfo?.subregion}
                            </p>
                            <p style={{ color: this.props.theme.text }} className="mr-0">
                                <span className="country-info-property">Capital: </span>
                                {countryInfo?.capital}
                            </p>
                        </section>
                        <section className="country-info-section-properties-2">
                            <p style={{ color: this.props.theme.text }} className="mr-0">
                                <span className="country-info-property">Top Level Domain: </span>
                                {countryInfo?.topLevelDomain}
                            </p>
                            <p style={{ color: this.props.theme.text }} className="mr-0">
                                <span className="country-info-property">Currencies: </span>
                                {concatenatedCurrencies}
                            </p>
                            <p style={{ color: this.props.theme.text }} className="mr-0">
                                <span className="country-info-property">Language: </span>
                                {concatenatedLanguages}
                            </p>
                        </section>
                    </div>
                    <section className="country-info-border-countries">
                        <div className="country-info-border-countries-title">
                            <span 
                                style={{ color: this.props.theme.text }}
                                className="country-info-property"
                            >
                                Border Countries: 
                            </span> 
                        </div>
                        <br className="country-info-space-border-countries" />
                        <div className="country-info-border-countries-content">
                            {borderCountriesList.map((borderCountry => {
                                return <Link
                                        style={{ border: this.props.theme.border, color: this.props.theme.text, backgroundColor: this.props.theme.elements}}
                                        className="country-info-border-country-link"
                                        key={borderCountry.alpha3Code} 
                                        to={`/${borderCountry.name}`}
                                    >
                                        {borderCountry.name}
                                    </Link>
                            }))}
                        </div> 
                    </section>
                </div>
            </main>
        </div>
    );
    }
}