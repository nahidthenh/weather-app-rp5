import React, { useState } from 'react';
import axios from 'axios';
const App = () => {
  const url = `https://api.openweathermap.org/data/2.5/weather?id=dhaka&appid=9fc7aa67b16b24ad22623966ce5e9a5e`
  console.log(url);
  return (
    <div className='weather-app-wrap'>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Dhaka</p>
          </div>
          <div className="temp">
            <h1>60°F</h1>
          </div>
          <div className="description">
            <p>Clear</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className='bold'>60°F</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p className='bold'>20%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className='bold'>12 MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;