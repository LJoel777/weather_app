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
    <nav>
      <div className="search-box">
        <input type="text" className="search-box" placeholder="City..." onKeyDown={search} />
      </div>
    </nav>
  );
};

export default NavBar;
