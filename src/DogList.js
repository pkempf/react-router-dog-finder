import React from "react";
import { NavLink } from "react-router-dom";

import "./DogList.css";

const DogList = ({ dogs }) => {
  return (
    <nav className="DogList">
      {dogs.map((dog) => {
        return (
          <NavLink key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`}>
            {dog.name}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default DogList;
