import React, { useEffect, useContext, useState } from "react";
import { ApiKey } from "../context/ApiKeyContext";
import axios from "axios";
import { LocationNameContext } from "../context/LocationNameContext";

const WeatherForecastCard = (props) => {
  const apiKey = useContext(ApiKey);
  const location = useContext(LocationNameContext)[0];
  const [minTemp, setMinTemp] = useState(null);
  const [maxTemp, setMaxTemp] = useState(null);
  const [icon, setIcon] = useState("");
  const [weatherDescription, setWeatherDescription] = useState("");
  const [date, setDate] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const calculateIndex = (dateTime) => {
    const maxNumberOfMeasurements = 8;
    const currentHour = new Date(dateTime * 1000).getHours() - 2;
    const currentNumberOfMeasurements = Math.round(currentHour / 3) + 1;
    const remainingNumberOfMeasurements = maxNumberOfMeasurements - currentNumberOfMeasurements;
    const firstIndex = remainingNumberOfMeasurements + 1;
    const lastIndex = firstIndex + 4;
    return [firstIndex, lastIndex];
  };

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  let content;

  useEffect(() => {
    setLoading(true);
    if (location !== "") {
      axios
        .get(`http://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=metric`)
        .then((res) => {
          let firsDataIndex = calculateIndex(res.data.list[0].dt)[0] + 8 * props.dayNum;
          let lastDataIndex = props.dayNum === 4 ? res.data.list.length - 1 : calculateIndex(res.data.list[0].dt)[1] + 8 * props.dayNum;
          setMaxTemp(res.data.list[lastDataIndex].main.temp_max);
          setMinTemp(res.data.list[firsDataIndex].main.temp_min);
          const date = new Date(res.data.list[lastDataIndex].dt * 1000);
          setDate(dateBuilder(date));
          setLoading(false);
          setIcon(`http://openweathermap.org/img/wn/${res.data.list[lastDataIndex].weather[0].icon}@2x.png`);
          setWeatherDescription(res.data.list[lastDataIndex].weather[0].description);
          setNotFound(false);
        })
        .catch((error) => {
          setNotFound(true);
          setLoading(false);
        });
    }
  }, [apiKey, location, props.dayNum]);

  if (!isLoading & !notFound) {
    content = (
      <div className="currentWeather">
        <div className="row">
          <div className="nothing"></div>
          <div className="card">
            <div className="card-header">
              <h2 className="location">{location}</h2>
            </div>
            <div className="card-body">
              <div className="card-text">
                <p className="weather">{weatherDescription}</p>
                <p className="">{date}</p>
                <p className="temp">{Math.round(minTemp)} &#8451;</p>
                <p className="temp">{Math.round(maxTemp)} &#8451;</p>
              </div>
              <img className="cardIMG" src={icon} alt="icon" />
            </div>
          </div>
        </div>
      </div>
    );
  } else content = "";

  return content;
};

export default WeatherForecastCard;
