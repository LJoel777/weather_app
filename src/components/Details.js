import React from "react";

const Details = (props) => {
  /* country, sunrise, sunset, timezone, min-max temp (in area), pressure: hPa(hectopascal, 1hPa=0,001 bar), humidity: %, wind(speed: m/s, deg: fok), clouds: % */
  return (
    <div>
      <div className="card-header">
        <h2 className="location">{props.location}</h2>
      </div>
      <div className="card-body">
        <div className="card-text"></div>
      </div>
    </div>
  );
};

export default Details;
