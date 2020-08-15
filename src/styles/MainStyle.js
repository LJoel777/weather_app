import styled from "styled-components";
import Clouds from "../images/Clouds.jpg";
import Rain from "../images/Rain.jpg";

const backgroundDecider = (weather) => {
  switch (weather) {
    case "Clouds":
      return Clouds;
    case "Rain":
      return Rain;
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
