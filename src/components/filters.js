import { Component } from 'react';
import './filters.css';

export default class Filters extends Component{
    render(){
        return (
            <div className="filter-container-all">
                <div className="input-filter-container">
                    <div style={{ boxShadow: this.props.theme.shadow }} className="container-form">
                        <div 
                            style={{ backgroundColor: this.props.theme.elements }}
                            className="search-icon-container d-flex justify-content-center align-items-center"
                        >
                            <img 
                                className="search-icon" 
                                width={15} 
                                height={15} 
                                src={this.props.theme.search} 
                                alt="search"
                            />
                        </div>
                        <input 
                            className={this.props.theme.description === "dark" ? "placeholderDark" : "placeholderLight"}
                            style={{ backgroundColor: this.props.theme.elements, color: this.props.theme.text  }}
                            onChange={(e) => this.props.actions.filtContryListByName(e.target.value)} 
                            type="text" value={this.props.filters.filterByCountryName} 
                            placeholder="search for a country" 
                            id=""
                        />
                    </div>
                </div>
                <br className="mobile-space-between-input-cbo" />
                <div className="cbox-filter-container">
                    <select 
                        style={{ boxShadow: this.props.theme.shadow, backgroundColor: this.props.theme.elements, color: this.props.theme.text  }}
                        onChange={(e) => this.props.actions.filtCountryListByContinent(e.target.value)} 
                        className="cbo-filter h-100" 
                        value={this.props.filters.filterByContinent} 
                    >
                        <option value="">Filter by Region</option>
                        <option value="Africa">Africa</option>
                        <option value="America">America</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </div>
            </div>
        );
    }
}