import React from 'react';

function Weather({weather}) {
  
    console.log(weather)

    if(weather)
    {
        return (
            <div>

                <h2>Weather in {weather.location.name}</h2>
              {/* {JSON.stringify(weather)} */}
              <div><b>Temperature</b>: {weather.current.temperature}</div>
              <div>
                <img src={weather.current.weather_icons[0]} alt={weather.current.weather_descriptions[0]} width="100px"></img>
              </div>
              <div><b>Wind</b>: {weather.current.wind_speed} kph direction {weather.current.wind_dir} </div>
            </div>
          );      
    }
    return(
        <div></div>
    )
  }

export default Weather;
