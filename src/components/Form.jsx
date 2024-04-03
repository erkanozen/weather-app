import { useState } from "react";
import "./Form.css";
import axios from "axios";
import Info from "./Info";
const Form = () => {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    async function getApi() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${
            import.meta.env.VITE_WEATHER_API
          }&units=metric`
        );
        console.log(response.data);
        setWeatherData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
    setCityName("");
  };

  return (
    <div className="Form-container">
      <form onSubmit={handleFormSubmit} className="weather-form">
        <input
          className="weather-input"
          type="text"
          placeholder="Enter City Name ..."
          onChange={(e) => setCityName(e.target.value)}
          value={cityName.toUpperCase()}
        />
        <button className="weather-button" type="submit">
          Fetch Data
        </button>
      </form>
      <Info weatherData={weatherData} />
    </div>
  );
};

export default Form;
