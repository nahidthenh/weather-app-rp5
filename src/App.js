import React, { useState } from 'react';
import axios from 'axios';
const App = () => {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=9fc7aa67b16b24ad22623966ce5e9a5e`


  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      setLocation('')
    }
  }

  return (
    <div className='weather-app-wrap'>
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter location...'
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{(((data.main.temp - 32) * 5) / 9).toFixed()}°C</h1> : null}
            {/* This For Fahrenheit  */}
            {/* {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null} */}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{(((data.main.feels_like - 32) * 5) / 9).toFixed()}°C</p> : null}
              {/* This For Fahrenheit  */}
              {/* {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null} */}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default App;