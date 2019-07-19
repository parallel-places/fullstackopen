import React from 'react'

const WeatherInfo = ({ weatherInfo }) => {
    console.log(weatherInfo)
    if (Object.keys(weatherInfo).length !== 0) {
        return (
            <div>
                <h2>Weather in {weatherInfo.location.name}</h2>
                <div ><span style={{ fontWeight: 'bold'}}>temperature:</span> {weatherInfo.current.temp_c} Celcius</div>
                <div><img alt={weatherInfo.current.condition.text} src={`https:${weatherInfo.current.condition.icon}`} height="40px" /></div>
                <div ><span style={{ fontWeight: 'bold'}}>wind:</span> {weatherInfo.current.wind_kph} kph direction {weatherInfo.current.wind_dir}</div>
            </div>
    )} else {
        return <div>Weather data is missing</div>
    }
}

export default WeatherInfo
