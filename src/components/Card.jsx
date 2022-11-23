import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Card = () => {
  const [getLocations, setGetLocations] = useState([]);
  useEffect(() => {
    function fetchApi() {
      fetch("logements.json")
        .then((res) => res.json())
        .then((data) => {
          setGetLocations(data);
        });
    }
    fetchApi();
  }, []);
  return (
    <div className="container-card">
      {getLocations.map((p) => (
        <NavLink key={p.id} to={p.id} className="link-card">
          <div className="card">
            <div className="img-container">
              <img src={p.cover} alt="logement" />
            </div>
            <p className="title-card">{p.title}</p>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Card;
