import React, { useContext } from "react";
import { LocationNameContext } from "../context/LocationNameContext";

const NavBar = () => {
  const setLocation = useContext(LocationNameContext)[1];

  const search = (e) => {
    if (e.key === "Enter") {
      setLocation(e.target.value);
    }
  };

  return (
    <div className="row">
    <div className="col-sm-4">
    <div className="search-box">
      <div className="form">
        <input type="search" className="search-box" onKeyDown={search} />
        <i className="fa fa-search"></i>
      </div>
    </div>
    </div>
    </div>
  );
};

export default NavBar;
