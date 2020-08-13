import React, { useState, useContext, useEffect } from "react";
import { ApiKey } from "../context/ApiKey";
import axios from "axios";

const CurrentWeather = () => {
  const apiKey = useContext(ApiKey);
  const [location, setLocation] = useState("Fót");
  const [temp, setTemp] = useState(null);
  const [weather, setWeather] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`).then((res) => {
      setWeather(res.data.weather[0].main);
      setTemp(res.data.main.temp);
      setLoading(false);
    });
  }, [apiKey, location]);

  let content;

  if (!isLoading) {
    console.log(weather);
    content = (
      <div className="currentWeather">
        <div className="row">
          <div className="nothing">

          </div>
        <div className="card">
            <img className="cardIMG" src="http://placehold.it/400x250/000/fff" />
            <div className="card-header">
                <h4 className="card-title">Product name</h4>
                <p className="card-text" >Product description... </p>
            </div>
            <div className="card-body">
                <div className="card-text">
                    <p className="lead" >100 USD</p>
                </div>
                <div className="button-text">
                    <a className="btn btn-success addButtons" >Add to cart</a>
                </div>
            </div>
          </div>
        </div>
        </div>
       
    );
  } else content = "Loading...";

  return content;
};

export default CurrentWeather;
