import { useState } from "react"
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 26.18,
    humidity: 72,
    temp: 25.68,
    tempMax: 25.68,
    tempMin: 25.68,
    weather: "clear sky",
  })

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo)
  };
    return (
        <div style={{ textAlign: "center" }}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}