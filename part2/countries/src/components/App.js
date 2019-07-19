import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FilterBox from './FilterBox'
import Info from './Info'
import CountryInfo from './CountryInfo'
import WeatherInfo from './WeatherInfo'
import apiKeys from './apikeys'

const App = () => {
    const [countries, setCountries] = useState([])
    const [inputTerm, setInputTerm] = useState("")
    const [content, setContent] = useState([])
    const [countryInfo, setCountryInfo] = useState([])
    const [weatherInfo, setWeatherInfo] = useState({})
    const [selectedCountry, setSelectedCountry] = useState({})

    const handleInputChange = (event) => {
        setContent(countries.filter(country => country.toLowerCase().startsWith(event.target.value.toLowerCase())))
        setInputTerm(event.target.value)
    }

    const handleButtonClick = (event) => {
        setContent(countries.filter(country => country.toLowerCase().startsWith(event.target.getAttribute('data').toLowerCase())))
        setInputTerm(event.target.getAttribute('data'))
        const country = countryInfo.filter(
            country => {
                return country.name.toLowerCase().startsWith(event.target.getAttribute('data').toLowerCase())
            })[0]
        setSelectedCountry(country)
    }

    useEffect(() => {
        if (content.length === 1) {
            const country = countryInfo.filter(
                country => country.name.toLowerCase().startsWith(inputTerm.toLowerCase()))[0]
            setSelectedCountry(country)
        }
    }, [content.length, countryInfo, inputTerm])

    useEffect(() => {
        if (inputTerm.length > 0 && countries.filter(c => c.toLowerCase().startsWith(inputTerm)).length > 0) {
            axios
                .get(`https://restcountries.eu/rest/v2/name/${inputTerm}`)
                .then(response => {
                    setCountryInfo(response.data)
                    const country = response.data.filter(
                        country => country.name.toLowerCase().startsWith(inputTerm.toLowerCase()))[0]
                    console.log(country)
                    console.log('apixu key ', apiKeys)
                    axios
                        .get(`https://api.apixu.com/v1/current.json?key=${apiKeys.apixu}&q=${country.capital}`)
                        .then(response => {setWeatherInfo(response.data)})
                })
        }
    }, [inputTerm, countries])

    useEffect(() => {
        axios
            .get("https://restcountries.eu/rest/v2/all")
            .then(response => {
                setCountries(response.data.map(countryInfo => countryInfo.name))
            }
            )}, [])

    if (content.length === 1) {
        return (
            <div>
                <FilterBox inputTerm={inputTerm} handleInputChange={handleInputChange}/>
                <CountryInfo selectedCountry={selectedCountry} />
                <WeatherInfo weatherInfo={weatherInfo} />
            </div>
        )
    } else {
        return (
            <div>
                <FilterBox inputTerm={inputTerm} handleInputChange={handleInputChange}/>
                <Info content={content} handleButtonClick={handleButtonClick} />
            </div>
        )
    }
}

export default App
