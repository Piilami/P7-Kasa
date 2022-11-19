import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="content-container">
      <div className="container-error">
        <h1 className="title-error">404</h1>
        <p className="text-error">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <NavLink to="/" className="link-error">
          Retourner à la page d'accueil
        </NavLink>
      </div>
    </div>
  );
};

export default Error;
