import React from 'react'

const CountryInfo = ({ selectedCountry }) => {
    if (Object.keys(selectedCountry).length !== 0) {
        return (
            <React.Fragment>
                <h2>{selectedCountry.name}</h2>
                <div>
                    <p>capital {selectedCountry.capital}<br/>population {selectedCountry.population}</p>
                </div>
                <h4>languages</h4>
                <ul>
                    {typeof selectedCountry.languages !== 'undefined' ? selectedCountry.languages.map(l => <li key={l.name}>{l.name}</li>) : "field missing"}
                </ul>
                <div border="">
                    <img alt="{selectedCountry.name}'s flag" src={selectedCountry.flag} height="80px"/>
                </div>
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <h2>Data is missing at the moment</h2>
            </React.Fragment>
            )
    }
}

export default CountryInfo
