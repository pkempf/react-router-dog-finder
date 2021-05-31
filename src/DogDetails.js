import React from "react";
import { useParams } from "react-router-dom";

import "./DogDetails.css";

const DogDetails = ({ dogList }) => {
  const { name } = useParams();
  const myDogArray = dogList.filter((dog) => dog.name.toLowerCase() === name);
  try {
    const myDog = myDogArray[0];
    return (
      <div className="DogDetails">
        <h1>{myDog.name}</h1>
        <img
          src={myDog.src}
          width="500px"
          alt={"the smiling face of " + myDog.name}
        />
        <p>Age: {myDog.age}</p>
        Facts about {myDog.name}:<br />
        <ol>
          {myDog.facts.map((fact) => {
            return <li key={fact}>{fact}</li>;
          })}
        </ol>
      </div>
    );
  } catch {
    return (
      <div className="DogDetails">
        <h3>{name}?</h3>
        <p>
          Something went wrong when we tried to find {name}. He or she is
          probably napping at home.
        </p>
      </div>
    );
  }
};

export default DogDetails;
