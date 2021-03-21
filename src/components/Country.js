import './Country.css';

function Country({ countryData, theme }){
    let populationToArray = countryData.population.toString().split('');
    let populationWithDotsSeparation = "";
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
    return (
        <div 
            style={{ backgroundColor: theme.elements, boxShadow: theme.boxShadowAll }}
            className="country-card"
        >
            <div className="flag-container d-flex justify-content-center">
                <img loading="lazy" className="country-flag" src={countryData.flag} alt=""/>
            </div>
            <div className="country-info">
                <h5>{countryData.name}</h5>
                <p>
                    <span>Population:</span> {populationWithDotsSeparation} 
                </p>
                <p>
                    <span>Region:</span> {countryData.region}
                </p>
                <p>
                    <span>Capital:</span> {countryData.capital}
                </p>
            </div>
        </div>
    );
}
export default Country;