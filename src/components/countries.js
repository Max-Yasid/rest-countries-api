import React, { Component } from 'react';
import Country from './containers/Country';
import './countries.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";


export default class Countries extends Component {

    render(){
      let countriesListFiltered = this.props.countriesList;
      countriesListFiltered = countriesListFiltered.filter((country) => {
        const countryName = country.name.toLowerCase();
        const countryContinent = country.region.toLowerCase();
        const countryNameFilter = this.props.filters.filterByCountryName.toLowerCase();
        const continentFilter = this.props.filters.filterByContinent.toLowerCase();
        return countryName.includes(countryNameFilter) && countryContinent.includes(continentFilter);
      });
        return (
            <div className="countries-container">
              {countriesListFiltered.map((countryData) => {
                return <Link 
                    style={{ color: this.props.theme.text }}
                    className="countries-country-card"
                    key={countryData.alpha3Code} 
                    to={`/${countryData.name}`}
                  >
                    <Country 
                      countryData={countryData} 
                    />
                  </Link>
              })}
            </div>
        );
    };
}