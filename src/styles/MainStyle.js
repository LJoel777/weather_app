import styled from "styled-components";
import Clouds from "../images/Clouds.jpg";
import Rain from "../images/Rain.jpg";
import Clear from "../images/Clear.jpg"
import Snow from "../images/Snow.jpeg"
import Mist from "../images/Mist.jpeg"


const backgroundDecider = (weather) => {
  switch (weather) {
    case "Clouds":
      return Clouds;
    case "Rain":
    case "Drizzle":
      return Rain;
    case "Clear":
      return Clear;
    case "Snow":
      return Snow;
    case "Mist":
    case "Smoke":
    case "Haze":
    case "Fog":
      return Mist;
    default:
      return Clouds;
  }
};

const MainDiv = styled.div`
  background: url(${(props) => backgroundDecider(props.weather)});
  position: absolute;
  min-width: 100%;
  min-height: 100%;
  top: 0;
  left: 0;
  background-size: cover;
`;

export default MainDiv;
