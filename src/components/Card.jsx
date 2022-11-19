import React from "react";
import { NavLink } from "react-router-dom";
import logement from "../data/logements.json";

const Card = () => {
  return (
    <div className="container-card">
      {logement.map((p) => (
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
