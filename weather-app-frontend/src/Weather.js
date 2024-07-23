import React,{ useState } from 'react';
import axios from 'axios';

const Weather=()=>{
    const [city, setCity] = useState('');
    const [weather,setweather]=useState(null);
    const [error,seterror]=useState('');
    const getWeather=async()=>{
        try{
            const response = await axios.get(`http://localhost:5000/weather?city=${city}`);
            console.log(response);
            setweather(response.data);
            seterror('');
        }
        catch(error){
            seterror('Error fetching weather data');
        }

    };
    return (
        <div>
          <h1>Weather App</h1>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
          />
          <button onClick={getWeather}>Get Weather</button>
          {weather && (
            <div>
              <h2>{weather.name}</h2>
              <p>Temperature: {weather.main.temp}°C</p>
              <p>Weather: {weather.weather[0].description}</p>
            </div>
          )}
          {error && <p>{error}</p>}
        </div>
      );
    };
    
    export default Weather;
