import "./Info.css";
import { MdWaterDrop } from "react-icons/md";
import { TbTemperatureCelsius } from "react-icons/tb";
const Info = ({ weatherData }) => {
  return (
    <>
      {weatherData && (
        <div className="InfoContainer">
          <p className="InfoCityName">
            {weatherData.name} / {weatherData.sys.country}
          </p>
          <div className="InfoTemperatureContainer">
            <p className="Temperature"> {weatherData.main.temp} </p>
            <TbTemperatureCelsius className="TemperatureIcon" />
          </div>
          <div className="WeatherDescriptionContainer">
            <p className="WeatherDescription">
              {weatherData.weather[0].description}
            </p>
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt=""
            />
          </div>

          <div className="HumidityContainer">
            <p className="Humidity"> {weatherData.main.humidity} </p>
            <MdWaterDrop className="HumidityIcon" />
          </div>
        </div>
      )}
    </>
  );
};

export default Info;
