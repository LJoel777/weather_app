import React,{useContext} from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Details from "./components/Details";
import CurrentWeather from "./components/CurrentWeather";
import WeatherForest from "./components/WeatherForecast";
import { ApiKeyProvider } from "./context/ApiKeyContext";
import { LocationNameProvider } from "./context/LocationNameContext";
import { WeatherDegreeProvider,WeatherDegreeContext } from "./context/WeatherDegreeContext";
import styled from "styled-components";
import Clouds from "./images/Clouds.jpg";
import Rain from "./images/Rain.jpg";

function App() {
  // let weather;
  // if(useContext(WeatherDegreeContext)[0] === undefined){
  //    weather = "Clouds";
  // }
  // else{
  //    weather =  useContext(WeatherDegreeContext)[0];
  // }
  // const myStyle = {
  //     background : URL(`./images/${weather}.jpg`),
  //     position: "absolute",
  //     minWidth: "100%",
  //     minHeight: "100%",
  //     top: "0",
  //     left:"0",
  //     backgroundSize: "cover"
  // } 
  return (
    <WeatherDegreeProvider>
      <Main/>
      </WeatherDegreeProvider>
  );
}

const Main = () =>{
  let weather = useContext(WeatherDegreeContext)[0];
  console.log(weather);
  const backgroundDecider = () =>{
    switch(weather){
      case "Clouds":
        return Clouds;
      case "Rain":
        return Rain;
    }
  }
  // switch(weather){
  //   case("Clouds"):
  //     picture = Clouds;
      
  // }
  const url = "./images/"+weather+".jpg";
  const MyStyle = styled.div `
      background : url(${backgroundDecider()});
      position: absolute;
      min-width: 100%;
      min-height: 100%;
      top: 0;
      left:0;
      background-size: cover;`;
  

    
  return(
  <MyStyle>
  <div className="container">
    <ApiKeyProvider>
      <LocationNameProvider>
        <NavBar />
        <CurrentWeather />
        <WeatherForest />
        <Details />
      </LocationNameProvider>
    </ApiKeyProvider>
  </div>
</MyStyle>
  
  );
}
export default App;
