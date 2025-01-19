import { useEffect, useRef, useState } from "react";
import Forecast from "./Forecast";
import { IoSunnyOutline } from "react-icons/io5";
import LoaderPage from "./Loader/LoaderPage";

function Weather() {
    const endpoint = 'https://api.openweathermap.org/data/2.5/'
    const key = 'd824ac4f3febd045bc28f8916713b91d'

    const [searchWeather,setSearchWeather] = useState('New York')
    const [weatherData,setWeatherData] = useState()
    const [citySubmited,setCitySubmited] = useState('New York')
    const inputRef = useRef()
    const focus = () => {
      inputRef.current.focus()
    }

    useEffect(() => {
        const getWeather = async () => {
          try {
            const response = await fetch(`${endpoint}weather?q=${citySubmited}&units=metric&appid=${key}`);
            if (!response.ok) {
              throw new Error(`Error fetching weather data: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
            setWeatherData(data);
          } catch (error) {
            console.error(error);
            setWeatherData(null);
          }
        };
        getWeather();
      }, [citySubmited]);
    
      
      const finalCity = (e) => {
        e.preventDefault()
        setCitySubmited(searchWeather)
      }
 
    return(
        <div className="weather">       
            <form onSubmit={finalCity}>
                <IoSunnyOutline />
                <input className='search' value={searchWeather}
                       onChange={(e)=>setSearchWeather(e.target.value)} ref={inputRef}/>
                <button className="ref" onClick={focus}>Enter your city</button>  
            </form> 
        {weatherData ? (
            <Forecast
              temp={weatherData.main.temp}
              feel={weatherData.main.feels_like}
              humidity={weatherData.main.humidity}
              maxTemp={weatherData.main.temp_max}
              minTemp={weatherData.main.temp_min}
              cloud={weatherData.weather[0].main}
           />
         ) : (<LoaderPage/>
          
         )}
         </div>
    )
}
export default Weather;