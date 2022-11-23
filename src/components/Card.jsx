import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Error from "../pages/Error";

const Card = () => {
  const [getLocations, setGetLocations] = useState([]);
  useEffect(() => {
    function fetchApi() {
      fetch("logements.json")
        .then((res) => res.json())
        .then((data) => {
          setGetLocations(data);
        })
        .catch((error) => {
          console.log(error);
          return <Error />;
        });
    }
    fetchApi();
  }, []);
  return (
    <div className="container-card">
      {getLocations.map((p) => (
        <NavLink key={p.id} to={p.id} className="link-card">
          <div className="card">
            <img src={p.cover} alt="logement" />
            <p className="title-card">{p.title}</p>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Card;
