import axios from "axios";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import { useEffect } from "react";

const Day = () => {
  const { days, API_KEY, city, weather, setWeather } = useContext(DataContext);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${parseFloat(
          city.latitude
        )}&lon=${parseFloat(
          city.longitude
        )}&units=metric&exclude=current,minutely,hourly,alerts&appid=${API_KEY}`
      )
      .then((res) => {
        setWeather(res.data.daily);
      })
      .catch((err) => console.log(err));
  }, [city, API_KEY, setWeather]);

  return (
    <div className="dayFlex">
      {weather.map((e, i) => (
        <div key={i} className="day">
          <div className="day-name">{days[new Date(e.dt * 1000).getDay()]}</div>
          <img
            src={`https://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
          <div>
            {parseInt(e.temp.max)}°C{" "}
            <span className="temp-min">{parseInt(e.temp.min)}°C</span>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Day;
