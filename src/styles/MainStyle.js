import styled from "styled-components";
import Clouds from "../images/Clouds.jpg";
import Rain from "../images/Rain.jpg";
import Clear from "../images/Clear.jpg";
import Snow from "../images/Snow.jpeg";
import Mist from "../images/Mist.jpeg";

const backgroundDecider = (weather, temp) => {
  console.log(temp);
  if (weather === "Rain" || weather === "Drizzle") return Rain;
  else if (weather === "Clear") return Clear;
  else if (weather === "Snow" || temp < 0) return Snow;
  else if (weather === "Mist" || weather === "Smoke" || weather === "Haze" || weather === "Fog") return Mist;
  return Clouds;
};

const MainDiv = styled.div`
  background: url(${(props) => backgroundDecider(props.weather, props.temp)});
  position: absolute;
  min-width: 100%;
  min-height: 100%;
  top: 0;
  left: 0;
  background-size: cover;
`;

export default MainDiv;
