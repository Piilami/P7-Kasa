import React from "react";
import { useParams } from "react-router-dom";
import Error from "./Error";
import Collapse from "../components/Collapse";
import Logements from "../data/logements.json";
import Caroussel from "../components/Caroussel";
import Tags from "../components/Tags";
import Ratings from "../components/Ratings";

const Product = () => {
  const { id } = useParams();
  const logement = Logements.find((p) => p.id === id);
  if (!logement) {
    return <Error />;
  }
  return (
    <div className="content-container">
      <main className="main-product">
        <Caroussel />

        <div className="allInfo">
          <div className="location-info">
            <h2 className="title-product">{logement.title}</h2>
            <h3 className="location-product">{logement.location}</h3>
            <Tags />
          </div>
          <div className="location-sub-info">
            <div className="host">
              <p className="host-name">{logement.host.name}</p>
              <img
                src={logement.host.picture}
                alt="Host"
                className="host-pic"
              />
            </div>

            <Ratings />
          </div>
        </div>
        <div className="rating"></div>
        <div className="container-collapse">
          <Collapse
            locCollapse="collapse-loc"
            locCollapseMenu="text-menu-loc"
            title="Description"
            content={logement.description}
          />
          <Collapse
            locCollapse="collapse-loc"
            locCollapseMenu="text-menu-loc"
            title="Equipements"
            content={logement.equipments.map((equipement, index) => (
              <li key={index}>{equipement}</li>
            ))}
          />
        </div>
      </main>
    </div>
  );
};

export default Product;
